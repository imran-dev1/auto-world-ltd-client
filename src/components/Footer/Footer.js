import React from "react";
import logo from "../../../src/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bottom-0 left-0">
      <div className="py-3 px-3 bg-[#11141e]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" style={{ maxWidth: "100px" }} />
            </Link>
          </div>
          <div className="navigation relative">
            <ul className="text-white flex items-center gap-10">
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
        </div>
      </div>
      <div className="py-3 px-3 bg-[#181d2b] text-center text-slate-500">Copyright &copy; 2022. All rights reserved by Auto World LTD.</div>
    </div>
  );
};

export default Footer;
