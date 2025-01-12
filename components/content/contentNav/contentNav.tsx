import React, { useState } from "react";
import Link from "next/link";

function Tabs() {
  const [active, setActive] = useState("#overview");

  const tabs = [
    { id: "#overview", label: "Overview" },
    { id: "#fundamentals", label: "Fundamentals" },
    { id: "#news-insights", label: "News Insights" },
    { id: "#sentiments", label: "Sentiments" },
    { id: "#team", label: "Team" },
    { id: "#technicals", label: "Technicals" },
    { id: "#tokenomics", label: "Tokenomics" },
  ];

  return (
    <div
      className="flex justify-evenly items-center gap-8 border-b-2 border-gray-300 font-semibold 
      text-base pt-10">
      {tabs.map((tab) => (
        <div key={tab.id}>
          <Link href={tab.id} scroll={false}>
            <div
              className={`cursor-pointer ${
                active === tab.id
                  ? "border-b-4 text-blue-600 pb-2 border-blue-500"
                  : "pb-2"
              }`}
              onClick={() => setActive(tab.id)}>
              {tab.label}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
