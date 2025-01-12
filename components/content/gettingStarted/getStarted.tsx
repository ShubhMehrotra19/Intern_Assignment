import Image from "next/image";
import React from "react";
import getStarted from "@/public/images/getStarted.svg";
import arrow from "@/public/logo/arrow.png";
import TrendingCoins from "./trendingCoins/trendingCoins";

function GetStarted() {
  return (
    <div className="flex flex-col justify-end items-center gap-6">
      <div className="h-fit px-12 py-12 flex flex-col justify-center items-center bg-[#0052fe] rounded-lg shadow-[0px_0px_16px_0px_rgba(25,61,84,0.10)]">
        <p className="text-center text-white text-2xl font-bold font-['Inter'] leading-10 px-4 mb-6">
          Get Started with KoinX for FREE
        </p>
        <p className="text-center text-[#f2f2f2] text-sm font-medium font-['Inter'] leading-normal mb-6">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <Image
          className="mb-8"
          src={getStarted}
          alt=""
          width={180}
          height={180}
        />
        <button
          type="button"
          className="bg-white text-black text-sm font-medium font-['Inter'] leading-normal px-5 py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[102%] active:scale-95 duration-300 ease-in-out">
          Get Started for FREE &nbsp;{" "}
          <Image src={arrow} height={25} width={25} alt="" />
        </button>
      </div>
      <TrendingCoins />
    </div>
  );
}

export default GetStarted;
