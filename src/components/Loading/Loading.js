import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  return (
    <div className="flex w-100 -mt-24 justify-center items-center bg-[#021b29] min-h-screen">
      <BounceLoader color="#0991b1" loading={true} size={50} />
    </div>
  );
};

export default Loading;
