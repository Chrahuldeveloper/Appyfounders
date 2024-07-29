import React from "react";
import { IoIosCall } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

export default function HowWeWork() {
  const data = [
    {
      Title: "Discovery Call",
      Description: "We begin with an in-depth discovery call to understand your business, goals, and vision for your website.",
      icon: <IoIosCall size={28} color="black" />,
    },
    {
      Title: "User Research",
      Description: "We begin with an in-depth discovery call to understand your business, goals, and vision for your website.",
      icon: <GiArchiveResearch size={28} color="black" />,
    },
    {
      Title: "Testing & Launch",
      Description: "We make sure your website works perfectly on all devices and browsers. Once everything is good to go, we launch your site for the world to see after you give the green light.",
      icon: <MdOutlineRocketLaunch size={28} color="black" />,
    },
    {
      Title: "Ongoing Support",
      Description: "After the launch, our support continues to help your website evolve with your business. We provide ongoing assistance for content updates and security maintenance.Why Our Clients Choose Us User-Centric Design",
      icon: <MdSupportAgent size={28} color="black" />,
    },
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
