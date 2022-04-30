import React from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner pt-24 pb-52 px-3">
      <div className="container mx-auto md:flex gap-20 justify-between text-white">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Auto World Ltd.
          </h1>
          <p className="my-5 md:my-3 text-slate-500">
            - The most popular auto car distributor in Bangladesh.
                  </p>
                  <p className="text-xl mt-10 mb-5">*You need the authentication to manage auto world inventories!</p>
          <Link
            className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-3 rounded-lg inline-block"
            to="/my-items"
          >
            Login <MdLogin className="float-right mt-1 ml-1 text-lg"></MdLogin>
          </Link>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Banner;
