import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100  dark:bg-gray-800 border-1 border-solid border-blue-400 border-box">
      <div className="max-w-[1240px] mx-auto flex flex-col ">
        <div className="sm:flex text-center justify-between items-center p-3">
          <h2 className="text-blue-500 text-4xl font-tangerine font-bold ml-2">
            MandrivkaUA
          </h2>
          <div className="flex justify-between w-full sm:max-w-[280px] box-border py-5 ">
            <Link to={"https://facebook.com/"} target="facebook">
              <FaFacebook className="icon text-blue-500  hover:text-indigo-500  w-8 h-8 " />
            </Link>

            <Link to={"https://github.com/"} target="twitter">
              <FaTwitter className="icon text-blue-500 hover:text-indigo-500 w-8 h-8 " />
            </Link>

            <Link to={"https://youtube.com/"} target="youtube">
              <FaYoutube className="icon text-blue-500 hover:text-indigo-500 w-8 h-8 " />
            </Link>

            <Link to={"https://www.instagram.com/"} target="instagram">
              <FaInstagram className="icon text-blue-500 hover:text-indigo-500 w-8 h-8 " />
            </Link>
          </div>
        </div>
        <div className="flex justify-between bg-blue-400 text-white w-full p-4">
          <ul className="lg:flex">
          <Link  to={"/"} className="mr-3">À propos</Link> 
          <Link  to={"/"}>Partenariats</Link>
            
          </ul>
          <ul className="text-right lg:flex">
            <Link to={"/"}>Page d'accueil</Link>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
