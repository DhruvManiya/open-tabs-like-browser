import { useEffect, useState } from "react";

import {
  eventType1,
  eventType2,
  eventType3,
  eventType4,
  eventType5,
  eventType6,
  eventType7,
  eventType8,
  eventType9,
  eventType10,
  eventType11,
  eventType12,
  eventType13,
  eventType14,
  eventType15,
  eventType16,
} from "./data";

const totalEvents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function App() {
  const [displayClose, setDisplayClose] = useState(false);
  const [data, setData] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState(tabs[0]);

  // const tabWiseData = () => {
    
  // };

  useEffect(() => {
    switch (active) {
      case 1:
        setData(eventType1);
        break;
      case 2:
        setData(eventType2);
        break;
      case 3:
        setData(eventType3);
        break;
      case 4:
        setData(eventType4);
        break;
      case 5:
        setData(eventType5);
        break;
      case 6:
        setData(eventType6);
        break;
      case 7:
        setData(eventType7);
        break;
      case 8:
        setData(eventType8);
        break;
      case 9:
        setData(eventType9);
        break;
      case 10:
        setData(eventType10);
        break;
      case 11:
        setData(eventType11);
        break;
      case 12:
        setData(eventType12);
        break;
      case 13:
        setData(eventType13);
        break;
      case 14:
        setData(eventType14);
        break;
      case 15:
        setData(eventType15);
        break;
      case 16:
        setData(eventType16);
        break;
      default:
        setData([]);
        break;
    }
  }, [active]);


  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <table className="h-[95vh] flex justify-center items-center w-[95%] border border-slate-700 relative shadow-xl">
          <tr className="w-full flex justify-center items-center bg-head absolute top-0 h-[4rem]">
            <th className=" w-[20%] text-xl text font-normal">Events Viewer</th>
            <th className=" w-[80%] h-[4rem]">
              <ul className="flex justify-start w-[94%] items-end h-[4rem] ml-[5%]">
                {tabs &&
                  tabs.map((tab, index) => {
                    return (
                      <li
                        key={tab*index}
                        className={` cursor-pointer bg-white ${ 'w-[25%]'} py-4 flex justify-between items-center ${
                          active !== tab ? "border" : "border border-b-0"
                        } border-gray-700 mb-[1px]`}
                        onMouseEnter={() => setDisplayClose(tab)}
                        onMouseLeave={() => setDisplayClose(0)}
                        onClick={() => setActive(tab)}
                      >
                        <p className="ml-[0.5rem]">Event Type {tab}</p>
                        {displayClose === tab && (
                          <span
                            onClick={() => {
                              tabs.splice(index, 1);
                              setTimeout(() => {
                                if (index === 0) {
                                  setActive(tabs[index]);
                                }else if(index === tabs.length){
                                  setActive(tabs[index-1])
                                }else{
                                  setActive(tabs[index])
                                }
                              }, 5);
                            }}
                            className="w-[1.25rem] h-[1.25rem] mr-4 rotate-45 rounded-full bg-white hover:bg-slate-300 transition-all cursor-pointer text-lg flex justify-center items-center"
                          >
                            +
                          </span>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </th>
          </tr>
          <tr className=" h-[54rem] absolute bottom-0 w-full flex justify-center items-center">
            <td className="w-[20%] border border-gray-500 h-[54rem]">
              <ul className="w-full h-full overflow-y-scroll">
                {totalEvents &&
                  totalEvents.map((event,index) => {
                    return (
                      <li
                      key={event*index}
                        className="w-full h-16 flex justify-center items-center border-b-[1px] border-gray-400 bg-slate-100 cursor-pointer"
                        onClick={() => {
                          setTabs([...tabs, event]);
                          setActive(event);
                        }}
                      >
                        Event Type {event}
                      </li>
                    );
                  })}
              </ul>
            </td>
            <td className="w-[80%] overflow-x-hidden overflow-y-scroll border h-[52rem]">
              <ul className="w-[98%] border border-gray-400 shadow-lg m-4">
                {data &&
                  data.map((data,index) => {
                    return (
                      <li key={data.timestamp * index} className="flex justify-center items-center h-[5rem] border border-b-gray-300 px-4">
                        <div className="w-[20%]">
                          <p className="font-light">timestamp</p>
                          <p className="font-medium">{data.timestamp}</p>
                        </div>
                        <div className="w-[80%]">
                          <p className="font-light">raw</p>
                          <p className="font-medium">{data.raw}</p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
