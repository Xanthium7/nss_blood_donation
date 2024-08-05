"use client";

import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { supabase } from "@/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [CurrentUserData, setCurrentUserData] = useState();

  useEffect(() => {
    const fetchdata = async (email) => {
      let { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email);
      setCurrentUserData(users[0]);
      console.log(CurrentUserData);
      console.log(users[0]);
    };
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user.email);
      fetchdata(user.email);
    };

    fetchUser();
  }, []);
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const logOut = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error logging out:", error.message);
    } else {
      console.log("User logged out successfully");
      router.replace("/Signup");
    }
  };
  return (
    <div className="h-screen w-screen">
      <div className="w-full flex flex-col gap-20">
        <div className="header w-full h-[30vh] bg-[#A61B1B]">
          <div className="icons flex text-white  justify-between px-10 pt-6 w-full ">
            <FaAngleLeft
              className="scale-150 cursor-pointer"
              onClick={() => {
                router.replace("/");
              }}
            />
            <MdModeEdit className="scale-150" />
          </div>
          <div className="details flex flex-col w-full h-full justify-center items-center gap-5">
            <div className="image_holder w-28 h-28 rounded-full">
              <img
                src="https://picsum.photos/200"
                alt="pfp"
                className="rounded-full"
              />
            </div>
            <div className="text_holder text-white text-2xl font-semibold">
              <h1>Deepak</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-around">
            <div className="flex flex-col gap-6">
              <h1 className="text-left">Name</h1>
              <h1 className="text-left">Age </h1>
              <h1 className="text-left">Blood Group</h1>
              <h1 className="text-left">Weight</h1>
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-center">:</h1>
              <h1 className="text-center">:</h1>
              <h1 className="text-center">:</h1>
              <h1 className="text-center">:</h1>
            </div>
            <div className="flex flex-col gap-6">
              {/* <h1 className="text-left">{CurrentUserData.name}</h1>
              <h1 className="text-left">{calculateAge(CurrentUserData.dob)}</h1>
              <h1 className="text-left">{CurrentUserData.blood_grp}</h1>
              <h1 className="text-left">{CurrentUserData.weight} KG</h1> */}
            </div>
          </div>

          <div className="flex justify-center rounded-full mt-10">
            <button
              onClick={logOut}
              className="bg-[#A61B1B] px-4 py-2 rounded-full text-white"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
