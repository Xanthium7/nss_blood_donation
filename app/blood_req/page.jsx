"use client";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import Heading from "../components/Heading";
import { supabase } from "@/utils/supabase/supabaseClient";
// import Button from "../components/Button/Button";
import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa";

const page = () => {
  const router = useRouter();

  const sendEmail = async (e) => {
    // console.log(e);
    const { data, error } = await supabase.functions.invoke("hello-world", {
      body: {
        blood_grp: e.blood_group,
        patient_name: e.name,
        hospital_name: e.hospital_name,
        bystander: e.bystander,
        phone: e.phone,
        units: e.units,
        send_to: e.send_to,
      },
    });
    if (error) {
      console.log("Error sending email:", error.message);
      toast.error("Error sending request");
    } else {
      console.log("Email sent successfully:", data);
      toast.success("Request sent successfully");
      router.replace("/");
    }
  };

  const setReqData = async (event) => {
    event.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // console.log(user.id);
    const { data, error } = await supabase
      .from("blood_request")
      .insert([
        {
          user_id: user.id,
          name: event.target.name.value,
          blood_group: event.target.blood_group.value,
          age: event.target.age.value,
          units: event.target.units.value,
          gender: event.target.gender.value,
          hospital_name: event.target.hospitalName.value,
          bystander: event.target.bystander.value,
          phone: event.target.phone.value,
          send_to: event.target.sendto.value,
        },
      ])
      .select();
    if (error) {
      console.log("Error inserting user data:", error.message);
      toast.error("Error inserting user data");
    } else {
      console.log("request data inserted successfully:", data);
      //code to send email
      sendEmail(data[0]);
      // const { data, error } = await supabase.functions.invoke("hello-world", {
      //   body: { blood_grp: data.new.blood_group, units: data.new.units },
      // });
      // if (error) {
      //   console.log("Error sending email:", error.message);
      // } else {
      //   router.replace("/");
      // }
    }
  };

  return (
    <div className="h-screen p-5 overflow-y-scroll">
      <div className="header ">
        <a href="/" className=" ">
          <FaAngleLeft className="scale-[2]" />
        </a>
        <Heading heading={"Blood Requests"} />
      </div>
      <form onSubmit={setReqData} action="post" className="pt-12 space-y-6">
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Name</h1>
          <input
            name="name"
            type="text"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <hr />
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Blood Group</h1>
          <select
            name="blood_group"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] "
            style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
          >
            <option selected disabled value="">
              Select Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <hr />
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Number of Units</h1>
          <input
            name="units"
            type="number"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <hr />
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Age</h1>
          <input
            name="age"
            type="number"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <hr />
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
        <hr />
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Hospital Name</h1>
          <input
            name="hospitalName"
            type="text"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <hr />
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Bystander</h1>
          <input
            name="bystander"
            type="text"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <hr />
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Phone Number</h1>
          <input
            name="phone"
            type="tel"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <hr />
        <div>
          <h1 className="font-bold text-[#1C1B1F]">Send to</h1>
          <select
            name="sendto"
            className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-"
            style={{ boxShadow: "0px 5px 4px #a7a7a7" }}
          >
            <option value="" disabled selected>
              send to
            </option>
            <option value="all">All</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
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
      <Toaster position="bottom-center" />
    </div>
  );
};

export default page;
