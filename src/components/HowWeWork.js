import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

export default function HowWeWork() {
  const data = [
    {
      Title: "Discovery Call",
      Description: "Understand your business, goals, and vision.",
      icon:<IoIosCall  size={28} color="black"/> 
    },
    {
      Title: "User Research",
      Description: "Tailor the website to your audience.",
      icon:<GiArchiveResearch size={28} color="black"/>

    },
    {
      Title: "Testing & Launch",
      Description: "Ensure functionality, then launch.",
      icon:<MdOutlineRocketLaunch size={28} color="black"/>

    },
    {
      Title: "Ongoing Support",
      Description: "Provide continuous support for updates and maintenance.",
      icon:<MdSupportAgent size={28} color="black"/>

    }
  ];
  
  return (
    <div className="relative pt-32">
      <div className="items-start mx-auto md:flex max-w-7xl">
        <div className="px-6 text-white lg:sticky top-24 lg:h-[37vh]">
          <h1 className="text-2xl font-bold md:text-5xl md:max-w-lg">
            How we Work
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center px-2 gap-14 md:px-3 md:w-2/3">
          {data.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  className="bg-[#272727] text-white max-w-xl rounded-xl shadow-lg p-8 sticky h-[37vh]"
                  style={{ top: `${i * 5 + 10}%` }}
                >
                  <div className="space-y-3">
                    <div className="bg-[#aaeec4] text-black  rounded-full w-14 h-14 items-center flex justify-center">
                     {item.icon}
                    </div>
                    <h1 className="text-lg font-bold">{item.Title}</h1>
                    <p className="leading-7">{item.Description}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
