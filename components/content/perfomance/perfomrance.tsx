import React from "react";

const PriceRange = ({
  label,
  low,
  high,
  currentValue,
}: {
  label: string;
  low: number;
  high: number;
  currentValue?: number;
}) => (
  <div className="relative flex items-center justify-between gap-2">
    <div className="flex flex-col gap-1 text-customDarkBlue">
      <span className="text-base">{label} Low</span>
      <span className="text-base font-semibold">{low.toLocaleString()}</span>
    </div>
    <div className="relative w-2/3">
      <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-1.5 rounded-md" />
      {currentValue && (
        <div className="absolute -bottom-10 left-2/3 transform -translate-x-1/4 mb-1">
          <span className="absolute text-base -top-9">&#9650;</span>
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-base text-customDarkBlue">
            ${currentValue.toLocaleString()}
          </span>
        </div>
      )}
    </div>
    <div className="flex flex-col gap-1 text-customDarkBlue">
      <span className="text-base">{label} High</span>
      <span className="text-base font-semibold">{high.toLocaleString()}</span>
    </div>
  </div>
);

const FundamentalRow = ({
  label,
  value,
  children,
}: {
  label: string;
  value?: string | number;
  children?: React.ReactNode;
}) => (
  <div className="flex justify-between items-center gap-24 border-b-2 py-2 border-gray-400 text-gray-500">
    <span>{label}</span>
    <div className="pr-4 text-black/90">{children || value}</div>
  </div>
);

const Performance = () => {
  const data = {
    today: {
      low: 46930.22,
      high: 49343.83,
      current: 48637.83,
    },
    week52: {
      low: 16930.22,
      high: 49743.83,
    },
    fundamentals: {
      price: 16815.46,
      dayRange: { low: 16382.07, high: 16874.12 },
      weekRange: { low: 16382.07, high: 16874.12 },
      volume: 23249202782,
      marketCapRank: 1,
      marketCap: 323507290047,
      marketDominance: 38.343,
      volumeToMarketCap: 0.0718,
      allTimeHigh: {
        value: 69044.77,
        change: -75.6,
        date: "Nov 10, 2021",
        timeAgo: "about 1 year",
      },
      allTimeLow: {
        value: 67.81,
        change: 24729.1,
        date: "Jul 06, 2013",
        timeAgo: "over 9 years",
      },
    },
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md bg-white mt-6 mx-3">
      <div className="p-6">
        <h2 className="font-bold text-base text-customBlue">Performance</h2>
      </div>

      <div className="p-6 pt-0 flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <PriceRange
            label="Today's"
            low={data.today.low}
            high={data.today.high}
            currentValue={data.today.current}
          />
          <PriceRange
            label="52W"
            low={data.week52.low}
            high={data.week52.high}
          />
        </div>

        <div className="flex flex-col gap-5 pt-5">
          <div className="flex flex-row gap-2 items-center">
            <h3 className="font-bold text-base text-customDarkBlue">
              Fundamentals
            </h3>
            <span className="bg-gray-400 w-4 text-center rounded-full text-xs text-white">
              i
            </span>
          </div>

          <div className="flex justify-between text-base">
            <div className="flex flex-col font-semibold">
              <FundamentalRow
                label="Bitcoin Price"
                value={`$${data.fundamentals.price.toLocaleString()}`}
              />
              <FundamentalRow
                label="24h Low / 24h High"
                value={`$${data.fundamentals.dayRange.low.toLocaleString()} / $${data.fundamentals.dayRange.high.toLocaleString()}`}
              />
              <FundamentalRow
                label="7d Low / 7d High"
                value={`$${data.fundamentals.weekRange.low.toLocaleString()} / $${data.fundamentals.weekRange.high.toLocaleString()}`}
              />
              <FundamentalRow
                label="Trading Volume"
                value={`$${data.fundamentals.volume.toLocaleString()}`}
              />
              <FundamentalRow
                label="Market Cap Rank"
                value={`#${data.fundamentals.marketCapRank}`}
              />
            </div>

            <div className="flex flex-col font-semibold">
              <FundamentalRow
                label="Market Cap"
                value={`$${data.fundamentals.marketCap.toLocaleString()}`}
              />
              <FundamentalRow
                label="Market Cap Dominance"
                value={`${data.fundamentals.marketDominance}%`}
              />
              <FundamentalRow
                label="Volume / Market Cap"
                value={data.fundamentals.volumeToMarketCap}
              />
              <FundamentalRow label="All-Time High">
                <div className="flex flex-col items-end">
                  <span>
                    ${data.fundamentals.allTimeHigh.value.toLocaleString()}{" "}
                    <span className="text-red-500">
                      {data.fundamentals.allTimeHigh.change}%
                    </span>
                  </span>
                  <span className="text-xs">
                    {data.fundamentals.allTimeHigh.date} (
                    {data.fundamentals.allTimeHigh.timeAgo})
                  </span>
                </div>
              </FundamentalRow>
              <FundamentalRow label="All-Time Low">
                <div className="flex flex-col items-end">
                  <span>
                    ${data.fundamentals.allTimeLow.value.toLocaleString()}{" "}
                    <span className="text-green-500">
                      {data.fundamentals.allTimeLow.change}%
                    </span>
                  </span>
                  <span className="text-xs">
                    {data.fundamentals.allTimeLow.date} (
                    {data.fundamentals.allTimeLow.timeAgo})
                  </span>
                </div>
              </FundamentalRow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
