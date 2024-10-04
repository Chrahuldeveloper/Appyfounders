import React, { useRef, useState } from "react";
import { HeroSection, Loader, Navbar } from "../components";
import Footer from "../components/Footer";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function Contact() {
  const { sub } = useParams();
  const [isloading, setisloading] = useState(false);

  const [data, setdata] = useState({
    Name: "",
    Email: "",
    Plan: sub,
    Message: "",
  });

  const saveData = async () => {
    if (
      Object.values(data).every((i) => {
        return i !== "";
      })
    ) {
      try {
        setisloading(true);
        await addDoc(collection(db, "contacts"), {
          name: data.Name,
          email: data.Email,
          Plan: sub,
          message: data.Message,
          timestamp: new Date(),
        });
        setisloading(false);
        setdata({ Name: "", Email: "", Message: "" });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const formref = useRef(null);

  const scrollToRef = () => {
    formref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#222222] w-screen  overflow-x-clip px-2.5">
      {isloading ? <Loader /> : null}
      <HeroSection
        tittle={"CONTACT US"}
        message={"WE WILL CONTACT YOU "}
        btn={true}
        scrollToRef={scrollToRef}
      />
      <div
        ref={formref}
        className="border-[1px] border-stone-700 shadow-xl max-w-7xl px-10 py-8 mx-auto mb-20 text-white rounded-lg  md:max-w-5xl lg:max-w-3xl"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold md:text-5xl">Contact Us</h1>
          <p>we will contact you as soon as possible.</p>
        </div>
        <div className="flex flex-col my-5 text-black space-y-9">
          <div className="w-full space-y-3.5">
            <h1 className="text-white">Name</h1>
            <input
              type="text"
              value={data.Name}
              onChange={(e) => {
                setdata({ ...data, Name: e.target.value });
              }}
              className="text-white w-full py-3.5 px-2 rounded-lg outline-none bg-zinc-800"
            />
          </div>
          <div className="w-full space-y-3.5">
            <h1 className="text-white">Email</h1>
            <input
              type="text"
              value={data.Email}
              onChange={(e) => {
                setdata({ ...data, Email: e.target.value });
              }}
              className="text-white w-full py-3.5 px-2 rounded-lg outline-none bg-zinc-800"
            />
          </div>
          <div className="w-full space-y-3.5">
            <h1 className="text-white">
              {sub === "null" ? "Please choose your plan" : "Your Plan"}
            </h1>
            {sub === "null" ? (
              <Link to="/">
                <input
                  type="text"
                  placeholder="package"
                  className="text-white w-full py-3.5 px-2 rounded-lg outline-none bg-zinc-800"
                />
              </Link>
            ) : (
              <input
                type="text"
                value={sub === "null" ? "" : data.Plan}
                className="text-white w-full py-3.5 px-2 rounded-lg outline-none bg-zinc-800"
              />
            )}
          </div>
          <div className="w-full space-y-3.5">
            <h1 className="text-white">About your Project</h1>
            <textarea
              className="w-full py-3.5 px-2 rounded-lg outline-none bg-zinc-800 text-white"
              value={data.Message}
              onChange={(e) => {
                setdata({ ...data, Message: e.target.value });
              }}
            ></textarea>
            <button
              onClick={saveData}
              className="w-full text-center bg-[#aaeec4] py-3 rounded-lg my-2 font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Navbar page="contact" />
      <Footer />
    </div>
  );
}
