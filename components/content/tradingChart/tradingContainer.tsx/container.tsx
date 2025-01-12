/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Trading from "../trading";

const Container = ({ coinId }: { coinId: string }) => {
  interface CoinDetails {
    name: string;
    symbol: string;
    image: {
      small: string;
    };
    market_cap_rank: number;
  }

  interface PriceDetails {
    [key: string]: {
      inr: number;
      usd: number;
      inr_24h_change?: number;
      usd_24h_change?: number;
    };
  }

  const [coinDetails, setCoinDetails] = useState<CoinDetails | null>(null);
  const [priceDetails, setPriceDetails] = useState<PriceDetails | null>(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const [coinResponse, priceResponse] = await Promise.all([
          axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`),
          axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=inr,usd&include_24hr_change=true`
          ),
        ]);

        setCoinDetails(coinResponse.data);
        setPriceDetails(priceResponse.data);
      } catch (error) {
        const e = error;
      }
    };

    fetchCoinDetails();
  }, [coinId]);

  return (
    <div className="w-full">
      <div className="border border-gray-200 rounded-md px-5 pt-6 pb-7 shadow-md bg-white relative">
        {coinDetails && priceDetails && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-6 items-center pb-4 md:pb-0">
              <div className="flex items-center gap-2">
                {coinDetails?.image && (
                  <Image
                    src={coinDetails.image.small}
                    alt={coinDetails.name}
                    width={30}
                    height={30}
                  />
                )}
                <h1 className="font-bold text-lg md:text-3xl text-[#0B1426]">
                  {coinDetails.name}
                </h1>
                <p className="text-sm md:text-xl font-semibold text-[#5D667B]">
                  {coinDetails.symbol.toUpperCase()}
                </p>
              </div>
              <p className="text-white px-2 py-1 rounded-md bg-[#808A9D] text-lg">
                Rank #{coinDetails.market_cap_rank}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 items-center">
                <span className="text-3xl md:text-4xl font-bold text-deepMidnightBlue">
                  &#x24;{priceDetails[coinId].usd}
                </span>
                <span
                  className={`text-sm sm:text-lg px-2 py-0.5 rounded-sm ${
                    priceDetails[coinId]?.usd_24h_change &&
                    priceDetails[coinId]?.usd_24h_change >= 0
                      ? "text-green-700 bg-green-100"
                      : "text-red-600 bg-red-100"
                  }`}>
                  {priceDetails[coinId]?.usd_24h_change &&
                  priceDetails[coinId]?.usd_24h_change >= 0 ? (
                    <span>&#9650;</span>
                  ) : (
                    <span>&#9660;</span>
                  )}
                  {Math.abs(priceDetails[coinId].usd_24h_change || 0).toFixed(
                    2
                  )}
                  %
                </span>
                <span className="text-sm sm:text-lg text-[#768396]">(24H)</span>
              </div>
              <p className="text-lg sm:text-xl font-semibold text-deepMidnightBlue">
                &#8377; {priceDetails[coinId].inr}
              </p>
            </div>
            <Trading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
