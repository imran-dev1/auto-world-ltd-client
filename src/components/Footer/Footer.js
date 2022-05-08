import React from "react";
import logo from "../../../src/logo.svg";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bottom-0 left-0">
      <div className="py-5 px-3 bg-[#11141e]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="navigation relative">
            <ul className="text-slate-300 flex flex-col gap-2 md:flex-row items-center md:gap-10">
              <li>
                <Link
                  className="md:hover:text-white flex items-center gap-1"
                  to="/add-item"
                >
                  Terms of Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="md:hover:text-white flex items-center gap-1"
                  to="/add-item"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 md:mt-0 text-slate-400 text-xl flex gap-5">
            <Link
              className="hover:text-white"
              to="https://www.facebook.com/woobucket"
            >
              <BsFacebook></BsFacebook>
            </Link>
            <Link
              className="hover:text-white"
              to="https://www.facebook.com/woobucket"
            >
              <BsInstagram></BsInstagram>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm md:text-md py-3 px-3 bg-[#181d2b] text-center text-slate-500">
        Copyright &copy; 2022. All rights reserved by Auto World LTD.
      </div>
    </div>
  );
};

export default Footer;
