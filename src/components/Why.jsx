import React from "react";
import data from "../data/Clients";

function Why() {
  return (
    <div className="relative pt-24 mx-auto max-w-7xl md:px-7">
      <div className="justify-between lg:flex lg:space-x-8">
        <div className="lg:sticky top-24 lg:h-[50vh] px-2  text-white md:px-0 md:w-1/3">
          <h1 className="max-w-md mt-16 text-2xl font-bold md:text-5xl md:max-w-sm">
            Why Our Clients Choose Us
          </h1>
        </div>
        <div className="flex flex-col px-2 pt-16 gap-7 md:px-3 md:w-2/3">
          {data.map((item, i) => (
            <div
              key={i}
              className={`sticky h-[60vh]`}
              style={{ top: `${i * 5 + 10}%` }}
            >
              <div
                className={`max-w-md md:max-w-max bg-[#272727] p-10 rounded-xl space-y-4 ${
                  i % 2 !== 0 ? "bg-[#aaeec4] text-black" : "text-white"
                }`}
              >
                <div
                  className={`w-16 h-16 ${
                    i % 2 !== 0 ? "bg-black" : null
                  } bg-[#aaeec4] text-black rounded-full flex items-center justify-center p-2`}
                >
                  {item.icon}
                </div>
                <h1 className="text-xl md:text-xl ubuntu-bold">
                  {item.tittle}
                </h1>
                <p className="poppins-medium md:text-lg">{item.Para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
