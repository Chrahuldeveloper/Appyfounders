import React from "react";
import { HeroSection, HowWeWork, Navbar } from "../components/index";
// import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Why from "../components/Why";
import Plans from "../components/Plans";
import Testimonials from "../data/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#222222] w-screen overflow-x-clip px-2 pt-28">
      <HeroSection
        tittle={"AppyFounders"}
        message={"Transform your Ideas into Apps.".toUpperCase()}
      />
      {/* <Projects /> */}
      <HowWeWork />
      <Why />
      <Testimonials />
      <Plans />
      <Navbar page="home" />
      <Footer />
    </div>
  );
}
