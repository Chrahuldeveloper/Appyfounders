import React from "react";
import { HeroSection, Navbar } from "../components/index";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Why from "../components/Why";
import Plans from "../components/Plans";

export default function Home() {
  return (
    <div className="bg-[#222222] w-screen overflow-x-clip px-2">
      <HeroSection
        tittle={" DevX"}
        message={"WE BUILD FOR THE FUTURE."}
      />
      <Projects />
      <Why />
      <Plans />
      <Navbar page="home"/>
      <Footer />
    </div>
  );
}
