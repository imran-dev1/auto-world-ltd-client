import React from "react";
import { Link } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="call-to-action py-16 px-3">
      <div className="container mx-auto">
        <div className="text-center">
          <h5 className="text-sm font-bold tracking-widest">EMERGENCY CALL 24/7</h5>
          <h2 className="text-3xl md:text-4xl font-bold my-5">91-123-456-7890</h2>
          <h3 className="text-md md:text-lg font-bold text-slate-700 mt-10 mb-4 uppercase tracking-widest">Want to take dealership?</h3>
          <Link
            className="bg-indigo-700 hover:bg-indigo-600 text-white py-3 px-10 text-lg  inline-block"
            to="http://m.me/woobucket"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
