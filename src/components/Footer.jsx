import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="px-2 py-20 text-white lg:px-6 ubuntu-bold">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          {/* Back to top button */}
          <div
            className="order-1 cursor-pointer md:order-2"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <p>Back to top</p>
          </div>

          {/* Social media links */}
          <div className="flex order-2 space-x-4 md:order-1">
            <a href="https://x.com/ChRahul_dev" className="cursor-pointer">
              X
            </a>
            <a
              href="https://www.linkedin.com/in/chrahuldev/"
              className="cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
          {/* Copyright */}
          <div className="order-3 cursor-pointer">DevX ©</div>
        </div>
      </footer>
    </div>
  );
}
