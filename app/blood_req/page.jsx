import React from "react";
import Heading from "../components/Heading";
import Button from "../components/Button/Button";

const page = () => {
  return (
    <div className="h-screen p-10 overflow-y-scroll">
      <Heading heading={"Blood Request "} />
      <form action="post" className="pt-12 space-y-6">
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Name</h1>
          <input
            name="name"
            type="text"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Blood Group</h1>
          <input
            name="bloodGroup"
            type="text"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Number of Units</h1>
          <input
            name="units"
            type="number"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Age</h1>
          <input
            name="age"
            type="number"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Gender</h1>
          <select
            name="gender"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141]"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          >
            <option value="" disabled selected>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Hospital Name</h1>
          <input
            name="hospitalName"
            type="text"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Bystander</h1>
          <input
            name="bystander"
            type="text"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Phone Number</h1>
          <input
            name="phoneNumber"
            type="tel"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Gender</h1>
          <select
            name="gender"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          >
            <option value="" disabled selected>
              send to
            </option>
            <option value="all">All</option>
            <option value="group">you Group</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#b14141] text-white font-bold mt-6"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
