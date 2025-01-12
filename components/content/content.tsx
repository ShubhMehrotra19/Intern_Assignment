"use client";
import React from "react";
import arrow from "@/public/logo/double_arrow.svg";
import Image from "next/image";
import GetStarted from "./gettingStarted/getStarted";
import Container from "./tradingChart/tradingContainer.tsx/container";
import ContentNav from "./contentNav/contentNav";
import Performance from "./perfomance/perfomrance";

function Content() {
  return (
    <div className="w-full px-10 flex flex-col justify-start items-start gap-4">
      <div className="flex justify-center items-center gap-[2px]">
        <p className="text-[#3e5765] text-sm font-normal font-['Inter']">
          Cryptocurrencies
        </p>
        <Image src={arrow} alt="arrow" width={18} height={18} />
        <p className="text-[#0e1529] text-sm font-medium font-['Inter']">
          Bitcoin
        </p>
      </div>
      <div className="w-full flex justify-between items-start mb-12 gap-8">
        <div className="pl-3 w-[70%]">
          <Container coinId="bitcoin" />
          <ContentNav />
          <Performance />
        </div>
        <div className="w-[30%]">
          <GetStarted />
        </div>
      </div>
    </div>
  );
}

export default Content;
