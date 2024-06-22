import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ page }) {
  return (
    <div className="fixed left-0 w-full bottom-5">
      <div className="z-50 p-4 mx-auto bg-gray-400 rounded-full w-72">
        <ul className="flex items-center space-x-3 justify-evenly">
          <Link to={"/"}>
            <div className="flex flex-col items-center justify-center">
              <li className="font-semibold cursor-pointer">Home</li>
              {page === "home" ? (
                <div className="w-11 h-0.5 bg-[#aaeec4] duration-300 ease-in-out"></div>
              ) : null}
            </div>
          </Link>
          <Link to={"/contact"}>
            <div className="flex flex-col items-center justify-center">
              <li className="font-semibold cursor-pointer">Contact</li>
              {page === "contact" ? (
                <div className="w-11 h-0.5 bg-[#aaeec4] duration-300 ease-in-out"></div>
              ) : null}
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
}
