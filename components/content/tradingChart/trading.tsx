/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  symbol?: string;
  interval?: string;
  theme?: "light" | "dark";
  locale?: string;
  height?: number;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  symbol = "BITSTAMP:BTCUSD",
  interval = "D",
  theme = "light",
  locale = "en",
  height = 580,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initTradingViewWidget = () => {
      if (!containerRef.current) return;

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        height,
        autosize: true,
        symbol,
        interval,
        timezone: "Etc/UTC",
        theme,
        style: "3",
        locale,
        enable_publishing: false,
        hide_legend: true,
        allow_symbol_change: true,
        save_image: false,
        calendar: false,
        support_host: "https://www.tradingview.com",
      });

      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    };

    initTradingViewWidget();

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [symbol, interval, theme, locale, height]);

  return (
    <div
      className="tradingview-widget-container"
      style={{ height: "100%", width: "100%" }}>
      <div
        className="tradingview-widget-container__widget"
        ref={containerRef}
        style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
};

export default memo(TradingViewWidget);
