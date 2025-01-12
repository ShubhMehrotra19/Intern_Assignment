import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface CoinItemProps {
  coin: {
    item: {
      thumb: string;
      name: string;
      symbol: string;
      price_btc: number;
    };
  };
}

const CoinItem = ({ coin }: CoinItemProps) => {
  const { thumb, name, symbol, price_btc } = coin.item;
  const isPositive = price_btc > 0;
  const priceChange = Math.round(price_btc * 100) / 100;

  return (
    <div className="flex items-center justify-between pt-5 mb-2">
      <div className="flex justify-center items-center font-semibold text-[#0F1629]">
        <Image src={thumb} alt={name} width={32} height={32} className="mr-2" />
        <span className="text-base">{name}</span>
        <span className="text-base">({symbol.toUpperCase()})</span>
      </div>
      <div
        className={`font-medium ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}>
        <span
          className={`px-2 py-1 rounded-sm text-base ${
            isPositive
              ? "text-green-700 bg-green-100"
              : "text-red-600 bg-red-100"
          }`}>
          {isPositive ? "▲" : "▼"} {priceChange} %
        </span>
      </div>
    </div>
  );
};
export default function TrendingCoins() {
  interface TrendingCoin {
    item: {
      id: string;
      thumb: string;
      name: string;
      symbol: string;
      price_btc: number;
    };
  }

  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[] | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const top3Coins = response.data.coins.slice(0, 3);
        setTrendingCoins(top3Coins);
      } catch (err) {
        console.error("Error fetching trending coins:", err);
        setError("Failed to load trending coins. Please try again later.");
      }
    };

    fetchTrendingCoins();
  }, []);

  if (error) {
    return <div className="text-center text-red-500 py-5">{error}</div>;
  }

  if (!trendingCoins) {
    return (
      <div className="text-center text-gray-500 py-5">
        Loading trending coins...
      </div>
    );
  }

  return (
    <div className="border border-gray-200 bg-white rounded-lg px-5 pt-5 pb-7 shadow-md w-full">
      <h3 className="pb-2 text-xl lg:text-3xl font-bold text-[#0F1629]">
        Trending Coins (24H)
      </h3>
      {trendingCoins.map((coin) => (
        <CoinItem key={coin.item.id} coin={coin} />
      ))}
    </div>
  );
}
