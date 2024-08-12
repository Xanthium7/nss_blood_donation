"use client";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import Heading from "@/app/components/Heading";
import { supabase } from "@/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";

function Signin() {
  const router = useRouter();
  const handelLogin = async (e) => {
    e.preventDefault();
    // console.log(e.target.email.value);
    let { data, error } = await supabase.auth.signInWithPassword({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (error) {
      console.log("Login faild:", error.message);
      toast.error(error.message);
    } else {
      console.log("User login successfully:", data);
      router.replace("/");
    }
  };

  return (
    <div className="px-10 pb-20 flex flex-col justify-center w-full  gap-12 h-screen overflow-y-auto">
      <Heading heading={"Log In"} />
      <form action="" className="flex flex-col gap-6" onSubmit={handelLogin}>
        <div className="">
          <h1 className="font-bold text-[#1C1B1F]">Email</h1>
          <input
            // value={email}
            name="email"
            type="email"
            className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <hr />
        <div className="">
          <h1 className="font-bold text-[#1C1B1F]">Password</h1>
          <input
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            name="password"
            type="password"
            className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
            style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#A61B1B] w-fit text-white px-3 py-1 rounded-full  "
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default Signin;
