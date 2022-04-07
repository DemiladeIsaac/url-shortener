import axios from "axios";
import React, { useRef, useState } from "react";
import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustomizable from "../../images/icon-fully-customizable.svg";

const Statistics = () => {
  const [url, setUrl] = useState([]);
  const linkRef = useRef();
  const fetchUrl = () => {
    const enteredLink = linkRef.current.value;
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${enteredLink}`)
      .then((response) => setUrl(response.data.result.short_link));
  };
  //console.log(url);

  return (
    <section className="bg-[#e8e8e8] py-20 mt-24 relative">
      <div className="container flex bg-url-darkViolet bg-pattern mt-6 p-8 h-[160px] md:h-22 absolute ml-[13%] mr-[13%] w-[74%] top-[-70px]  lg:top-[-100px]">
        <div className="flex flex-1 flex-col md:flex-row gap-6 items-center">
          <input
            className="bg-white py-2 px-2 w-full md:w-5/6 rounded-md"
            placeholder="Shorten a link here..."
            ref={linkRef}
          />
          <button
            className="bg-url-cyan text-white w-full lg:w-1/5 px-8 py-2 rounded-md"
            onClick={fetchUrl}
          >
            Shorten It!
          </button>
        </div>
      </div>
      <div className="bg-white text-url-darkBlue w-[74%] text-center mt-8 mx-auto">
        {url}
      </div>
      <div className="lg:w-[33%] mx-auto px-2 mt-24">
        <h1 className="text-url-veryDarkViolet font-medium text-3xl text-center">
          Advanced Statistics
        </h1>
        <p className="text-url-gray font-medium text-center">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>

      <div className="container flex flex-col gap-6 lg:flex-row mt-28">
        <div className="bg-white py-5 px-4 rounded-md w-5/6 mx-auto lg:w-1/3 mb-16 relative">
          <div className="bg-url-darkViolet rounded-full w-[70px] h-[70px] absolute top-[-30px] left-5 mb-4">
            <img className="ml-4 mt-3" src={brandRecognition} alt="brand" />
          </div>
          <h1 className="text-url-veryDarkViolet font-bold mt-10">
            Brand Recognition
          </h1>
          <p className="text-url-grayViolet text-md mt-2">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        {/* statistics two */}
        <div className="bg-white py-7 px-2 rounded-md w-5/6 mx-auto lg:w-1/3 my-8 relative">
          <div className="bg-url-darkViolet rounded-full w-[70px] h-[70px] absolute top-[-30px] left-5 mb-4">
            <img className="ml-4 mt-3" src={detailedRecords} alt="details" />
          </div>
          <h1 className="text-url-veryDarkViolet font-bold mt-10">
            Detailed Records
          </h1>
          <p className="text-url-grayViolet text-md mt-2">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        {/* Statistics 3 */}
        <div className="bg-white py-7 px-2 rounded-md w-5/6 mx-auto lg:w-1/3 mt-16 relative">
          <div className="bg-url-darkViolet rounded-full w-[70px] h-[70px] absolute top-[-30px] left-5 mb-4">
            <img
              className="ml-4 mt-3"
              src={fullyCustomizable}
              alt="customizable"
            />
          </div>
          <h1 className="text-url-veryDarkViolet font-bold mt-10">
            Fully Customizable
          </h1>
          <p className="text-url-grayViolet text-md mt-2">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
