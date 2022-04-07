import React from "react";
import illustration from "../../images/illustration-working.svg";

const Banner = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center mt-14">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-6xl font-bold text-center lg:text-left">
            More than just shorter links
          </h1>
          <p className="text-2xl text-url-gray font-medium text-center lg:text-left">
            Build your brand’s recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="bg-url-cyan text-white mt-4 px-7 rounded-3xl py-2">
            Get Started
          </button>
        </div>
        <div className="flex flex-1 justify-center">
          <img className="w-full md:w-full" src={illustration} alt="working" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
