import React from "react";

const Navbar = () => {
  return (
    <div className="font-Poppins">
      <header>
        <nav className="container flex items-center mt-4">
          <h1 className="font-bold mr-6 text-lg">Shortly</h1>
          <ul className="hidden sm:flex flex-1 gap-12 font-medium text-xs text-url-grayViolet">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Resources</li>
          </ul>
          <div className="hidden sm:flex flex-1 text-sm gap-8 items-center justify-end">
            <h3 className="text-url-grayViolet">Login</h3>
            <button className="bg-url-cyan rounded-3xl text-white px-7 py-3">
              Sign Up
            </button>
          </div>
          <div class="flex sm:hidden flex-1 justify-end">
            <i class="text-2xl fas fa-bars"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
