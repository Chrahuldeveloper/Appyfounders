import React from "react";
import { HeroSection, Line, Navbar } from "../components/index";
import data from "../data/Clients";
import workflow from "../data/Workflow";
import Plans from "../data/Plans";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import { FaCircleCheck } from "react-icons/fa6";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="bg-[#222222] w-screen overflow-x-clip px-2">
      <HeroSection
        tittle={"SaaS Studios"}
        message={"WE DESIGN FOR THE FUTURE."}
      />
      <Projects />
      {/* <div className="mt-24 px-6">
        <div className="flex flex-col max-w-md  mx-auto text-white md:max-w-7xl md:justify-start space-x-40 md:flex-row">
          <h1 className="text-2xl font-bold md:text-5xl">What We Do</h1>
          <div className=" space-y-5 md:max-w-2xl ubuntu-medium rounded-3xl p-5 pt-0">
            <p className=" md:text-2xl ">
              We are a team of developers that create high-quality websites and
              web apps.
            </p>
            <p className="md:text-2xl">
              Our website packages are diverse from stunning landing pages to
              complex website apps.
            </p>
          </div>
        </div>
      </div> */}

      {/* why our clients  */}

      <div className="relative pt-24 mx-auto max-w-7xl md:px-7">
        <div className="lg:flex justify-between space-x-8">
          <div className="lg:sticky top-24 lg:h-[50vh] px-6 text-white md:px-0 md:w-1/3">
            <h1 className="max-w-md mt-16 text-2xl font-bold md:text-5xl md:max-w-sm">
              Why Our Clients Choose Us
            </h1>
          </div>

          <div className="flex flex-col px-6 pt-16 gap-7 md:px-3 md:w-2/3">
            {data.map((item, i) => (
              <div
                key={i}
                className={`sticky h-[60vh]`}
                style={{ top: `${i * 5 + 10}%` }}
              >
                <div
                  className={`max-w-md md:max-w-max bg-[#272727] p-10 rounded-xl space-y-4 ${
                    i % 2 !== 0 ? "bg-[#5ED0E7] text-black" : "text-white"
                  }`}
                >
                  <div
                    className={`w-16 h-16 ${
                      i % 2 !== 0 ? "bg-black" : null
                    } bg-[#5ED0E7] text-black rounded-full flex items-center justify-center p-2`}
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

      <div className="px-6 mx-auto max-w-7xl md:px-8">
        <h2 className="text-5xl ubuntu-bold text-center text-white mb-10">
          The Way We Work
        </h2>
        <div className="grid gap-10 md:gap-16 md:grid-cols-2">
          {workflow.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5ED0E7] to-[#0c4356] rounded-full text-white">
                <span className="text-3xl font-bold">{i + 1}</span>
              </div>
              <div>
                <h3 className="text-xl ubuntu-bold text-white mb-2">
                  {item.tittle}
                </h3>
                <p className="text-gray-300 max-w-md poppins-medium">
                  {item.Para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -----------------------------about us----------------------------  */}
      <AboutUs />

      <FAQ />

      {/*-------------------------------- Plans ------------------------------- */}

      <div className="justify-between gap-10 mx-auto pt-28 max-w-7xl  md:flex">
        <div className="px-6 text-white ">
          <h1 className="text-2xl font-bold md:text-5xl md:max-w-lg">
            Choose Your Plan
          </h1>
        </div>
      </div>
      <div className="flex flex-col  gap-5 mx-auto py-14 lg:grid lg:grid-cols-3 w-full px-6">
        {Plans.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div
                className={` ${
                  i % 2 !== 0
                    ? "bg-[#5ED0E7] text-black"
                    : "bg-[#272727] text-white"
                } space-y-4 max-w-md rounded-xl shadow-lg  p-8`}
              >
                <h1 className="text-xl font-bold md:text-2xl ubuntu-bold ">
                  {item.tittle}
                </h1>
                <p className=" md:text-lg poppins-medium h-24">{item.Para}</p>
                <button
                  className={` w-full py-3 rounded-full font-semibold ${
                    i % 2 !== 0
                      ? "bg-black text-white"
                      : "bg-[#5ED0E7]  text-black"
                  }`}
                >
                  Get Started
                </button>
                <hr
                  className={`${i === 0 && "hidden"}  bg-black h-0.5 w-full`}
                />
                {item.features.length > 0 ? (
                  <h1 className="text-lg ubuntu-bold md:text-2xl">
                    Features :{" "}
                  </h1>
                ) : null}
                <ul className="space-y-3 poppins-medium">
                  {item.features.map((item) => {
                    return (
                      <li className="flex items-center gap-3">
                        {i % 2 !== 0 ? (
                          <FaCircleCheck color="black" />
                        ) : (
                          <FaCircleCheck color="#5ED0E7" />
                        )}
                        <h1>{item}</h1>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {/* <Navbar /> */}
      <Footer />
    </div>
  );
}
