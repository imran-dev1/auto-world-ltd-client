import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-24 pb-24 px-3">
      <div className="container mx-auto text-center">
        <p className="text-3xl">Oops! That page can’t be found.</p>
        <h1 className="text-9xl my-10 md:text-[267px] font-extrabold">404</h1>
        <Link
          className="bg-indigo-700 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg inline-block text-lg"
          to="/"
        >
          <HiOutlineArrowNarrowLeft className="float-left mt-1 mr-2 text-xl"></HiOutlineArrowNarrowLeft>{" "}
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
