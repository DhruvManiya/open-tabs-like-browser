import React, { useState } from "react";

const Tabs = ({ tab, index }) => {
  const [displayClose, setDisplayClose] = useState(false);

  return (
    <>
      <li
        key={tab}
        className={` cursor-pointer bg-white ${
          "w-[25%]" 
        } py-4 flex justify-between items-center 
        
         border-gray-700 mb-[1px]`}
        onMouseEnter={() => setDisplayClose(tab)}
        onMouseLeave={() => setDisplayClose(0)}
        // onClick={() => setActive(tab)}
      >
        <p className="ml-[0.5rem]">Event Type {tab}</p>
        {displayClose === tab && (
          <span
            onClick={() => {
              tab.splice(index, 1);
              setTimeout(() => {
                // if (index === 0) {
                //   setActive(tab[index]);
                // } else if (index === tab.length) {
                //   setActive(tab[index]);
                // }
              }, 5);
            }}
            className="w-[1.25rem] h-[1.25rem] mr-4 rotate-45 rounded-full bg-white hover:bg-slate-300 transition-all cursor-pointer text-lg flex justify-center items-center"
          >
            +
          </span>
        )}
      </li>
    </>
  );
};

export default Tabs;
