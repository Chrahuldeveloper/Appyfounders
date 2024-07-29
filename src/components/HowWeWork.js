import React from "react";

export default function HowWeWork() {
  const data = [
    {
      Tittle: "Discovery Call",
      Para: "We begin with an in-depth discovery call to understand your business, goals, and vision for your website.",
    },
    {
      Tittle: "User Research",
      Para: "we conduct user research to understand your target audience.",
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
    <>
      <div className="px-6 text-white ">
        <h1 className="text-2xl font-bold md:text-5xl md:max-w-lg">
          How we Work
        </h1>
      </div>
    </>
  );
}
