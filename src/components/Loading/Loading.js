import React from "react";
import { BarLoader, HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex w-100 -mt-24 justify-center items-center min-h-screen">
      <BarLoader color="#0991b1" loading={true} height={4} width={100} />
    </div>
  );
};

export default Loading;
