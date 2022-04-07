import React from "react";
import Logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className="container grid grid-cols-1 text-center md:text-left md:grid-cols-5">
        <div>
          <h1 className="text-white text-2xl font-bold">Shortly</h1>
        </div>
        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-white text-sm font-medium">Features</h1>
          <p className="text-url-gray text-sm mt-4">Link Shortening</p>
          <p className="text-url-gray text-sm">Branded Links</p>
          <p className="text-url-gray text-sm">Analytics</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-medium">Resources</h1>
          <p className="text-url-gray text-sm mt-4">Blog</p>
          <p className="text-url-gray text-sm">Developers</p>
          <p className="text-url-gray text-sm">Support</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-medium">Company</h1>
          <p className="text-url-gray text-sm mt-4">About</p>
          <p className="text-url-gray text-sm">Our team</p>
          <p className="text-url-gray text-sm">Careers</p>
          <p className="text-url-gray text-sm">Contact</p>
        </div>
        <div className="flex gap-6 justify-center mt-2 md:mt-0">
          <img className="w-[20px] h-[20px]" src={facebook} alt="facebook" />
          <img className="w-[20px] h-[20px]" src={twitter} alt="twitter" />
          <img className="w-[20px] h-[20px]" src={instagram} alt="instagram" />
          <img className="w-[20px] h-[20px]" src={pinterest} alt="pinterest" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
