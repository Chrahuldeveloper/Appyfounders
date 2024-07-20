import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <div>
      <Link
        to={"/contact"}
      >
        <button
          className={`group flex items-center justify-center space-x-3 bg-[#aaeec4] text-gray-800 w-64 mx-auto py-3.5 mt-5 rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900`}
        >
          <span className="text-xl font-semibold">Book a Call</span>
          <IoArrowForward
            size={25}
            className="transition-transform transform -rotate-45 group-hover:translate-x-1"
          />
        </button>
      </Link>
    </div>
  );
}
