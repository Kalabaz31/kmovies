import React, { useState, useEffect } from "react";
import Movies from "./Movies";

const Tabs = ({headerTitle, data}) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeTabStyle = "bg-zinc-200 p-2 text-black font-bold cursor-pointer";
  const notActiveTabStyle = "bg-zinc-800 p-2 cursor-pointer";

  const activeContentStyle = "flex justify-center";
  const notActiveContentStyle = "hidden";

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl">{headerTitle}</h1>

        {data.map((element) => (
          <div key={element.index}>
            <a
              className={
                activeTab === element.index ? activeTabStyle : notActiveTabStyle
              }
              onClick={() => setActiveTab(element.index)}
            >
              {element.name}
            </a>
          </div>
        ))}
      </div>
      <div className="flex overflow-x-auto gap-4 no-scrollbar ">
        {data.map((element) => (
          <div
            className={
              activeTab === element.index
                ? activeContentStyle
                : notActiveContentStyle
            }
            key={element.index}
          >
            
              <Movies data={element.movies} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
