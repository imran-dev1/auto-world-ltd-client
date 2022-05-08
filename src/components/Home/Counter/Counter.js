import React from "react";
import "./Counter.css";
import CountUp from "react-countup";
import { CgBmw } from "react-icons/cg";
import { AiFillCar } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";

const Counter = () => {
  return (
    <div className="counter py-24 px-3">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center gap-10 md:flex-row justify-evenly">
          <div className="flex gap-2 text-white">
            <div className="text-[80px]">
              <CgBmw></CgBmw>
            </div>
            <div>
              <div className="text-5xl font-bold">
                <CountUp start={10} end={20} duration={3} />+
              </div>
              <p className="text-xl uppercase">Car Brands</p>
            </div>
          </div>
          <div className="flex gap-2 text-white">
            <div className="text-[80px]">
              <AiFillCar></AiFillCar>
            </div>
            <div>
              <div className="text-5xl font-bold">
                <CountUp start={120} end={250} duration={3} />+
              </div>
              <p className="text-xl uppercase">Cars</p>
            </div>
          </div>
          <div className="flex gap-2 text-white">
            <div className="text-[80px]">
              <FaRegAddressCard></FaRegAddressCard>
            </div>
            <div>
              <div className="text-5xl font-bold">
                <CountUp start={70} end={99} duration={3} />+
              </div>
              <p className="text-xl uppercase">Happy Sellers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
