import React from "react";
import Image from "next/image";
import logo from "@/public/logo/logo.svg";

function Navbar() {
  const style = {
    navlink:
      "text-base font-semibold font-var(--font-inter) cursor-pointer text-gray-500 hover:text-gray-900",
    button:
      "bg-gradient-to-r from-[#2870ea] to-[#1b4aef] rounded-lg text-white text-base font-semibold font-var(--font-inter) cursor-pointer px-4 py-2 hover:scale-[102%] active:scale-95 transition-transform duration-300",
  };

  return (
    <nav className="w-full flex justify-between items-center px-14 py-6 bg-white shadow">
      <Image src={logo} alt="logo" width={100} height={100} />
      <div className="flex gap-8 justify-evenly items-center">
        <a className={style.navlink} href="#">
          Crypto Taxes
        </a>
        <a className={style.navlink} href="#">
          Free Tools
        </a>
        <a className={style.navlink} href="#">
          Resource Center
        </a>
        <button className={style.button} type="button">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
