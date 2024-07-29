import React from "react";
import { BsEmojiSmile } from "react-icons/bs";

export default function HowWeWork() {
  const data = [
    {
      Tittle: "Discovery Call",
      Para: "We begin with an in-depth discovery call to understand your business, goals, and vision for your website.",
    },
    {
      Tittle: "User Research",
      Para: "We begin with an in-depth discovery call to understand your business, goals, and vision for your website.",
    },
    {
      Tittle: "Testing & Launch",
      Para: "We make sure your website works perfectly on all devices and browsers. Once everything is good to go, we launch your site for the world to see after you give the green light.",
    },
    {
      Tittle: "Ongoing Support",
      Para: "After the launch, our support continues to help your website evolve with your business. We provide ongoing assistance for content updates and security maintenance.",
    },
  ];

  return (
    <div className="items-start mx-auto md:flex max-w-7xl">
      <div className="px-6 text-white ">
        <h1 className="text-2xl font-bold md:text-5xl md:max-w-lg">
          How we Work
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 px-2 md:px-3 md:w-2/3">
        {data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="bg-[#272727] text-white max-w-xl rounded-xl shadow-lg p-8">
                <div className="space-y-3">
                  <div className="bg-[#aaeec4] text-black  rounded-full w-14 h-14 items-center flex justify-center">
                    <BsEmojiSmile size={45} />
                  </div>
                  <h1 className="text-lg font-bold">{item.Tittle}</h1>
                  <p className="leading-7">{item.Para}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
