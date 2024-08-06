"use client";
import React from "react";
import Heading from "../components/Heading";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/supabaseClient";

const page = () => {
  const router = useRouter();
  const setReqData = async (event) => {
    event.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user.email);
    const { data, error } = await supabase
      .from("certificate_table")
      .insert([
        {
          name: event.target.name.value,
          year_study: event.target.year_study.value,
          branch: event.target.branch.value,
          date: event.target.date.value,
          email: user.email,
        },
      ])
      .select();
    if (error) {
      console.log("Error inserting user data:", error.message);
    } else {
      console.log("request data inserted successfully:", data);
      router.replace("/blood_camp/certificate_d");
    }
  };
  return (
    <div className="h-screen w-screen">
      <div className="pt-5">
        <FaAngleLeft
          className="scale-150 cursor-pointer pl-2"
          onClick={() => {
            router.replace("/");
          }}
        />
        <div className="header mx-10">
          <Heading heading={"Student Details"} />
        </div>
        <div className="form_holder px-10 mt-14 ">
          <form
            className=" flex flex-col gap-5"
            onSubmit={setReqData}
            action="post"
          >
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
              <h1 className="font-bold text-[#1C1B1F]">Year Of Study</h1>
              <select
                name="year_study"
                className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] "
                style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
              >
                <option selected disabled value="">
                  Select Year Of Study
                </option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
              </select>
            </div>
            <div>
              <h1 className="font-bold text-[#1C1B1F]">Branch</h1>
              <select
                name="branch"
                className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] "
                style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
              >
                <option selected disabled value="">
                  Select Branch
                </option>
                <option value="CSE">Computer Science</option>
                <option value="CIVIL">Civil</option>
                <option value="ELECTRICAL">Electrical</option>
                <option value="MECHANICAL">Mechannical</option>
                <option value="EC">EC</option>
                <option value="AI DS">AI DS</option>
                <option value="BSH">Humanities</option>
                <option value="CA">Computer Application</option>
              </select>
            </div>
            <div>
              <h1 className="font-bold text-[#1C1B1F]">Date</h1>
              <input
                name="date"
                type="date"
                className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
                style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#A61B1B] w-fit text-white px-4 py-2 rounded-full  "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
