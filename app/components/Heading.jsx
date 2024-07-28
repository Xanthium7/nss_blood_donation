import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="bg-[#A61B1B] h-[10vh] rounded-[100%] flex justify-center items-center">
      <h1 className="text-3xl text-white font-semibold -tracking-tight ">
        {heading}
      </h1>
    </div>
  );
};

export default Heading;
