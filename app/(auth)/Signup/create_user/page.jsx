"use client";

import Heading from "@/app/components/Heading";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/supabaseClient";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [isSubmiting, setisSubmiting] = useState(false);

  const setUserData = async (user, event) => {
    console.log(event.date);
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          id: user.id,
          name: event.name.value,
          email: event.email.value,
          phone: event.phone.value,
          gender: event.gender.value,
          dob: event.date.value,
          blood_grp: event.blood_group.value,
          weight: event.weight.value,
        },
      ])
      .select();
    if (error) {
      console.log("Error inserting user data:", error.message);
    } else {
      console.log("User data inserted successfully:", data);
    }
  };

  const signUp = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setisSubmiting(true);
    if (password === "") {
      toast.error("Password Cant be Empty! ");
      return;
    }
    if (password !== conPassword) {
      toast.error("Password Donot Match!");
      return;
    }
    if (!email.endsWith("@mgits.ac.in") || email === "") {
      toast.error("Give a valid MITS mail(@mgits.ac.in)");
      return;
    }

    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Error signing up:", error.message);
      alert(error.message);
    } else {
      // const user = await supabase.auth.getSession();
      // console.log(user);
      console.log("Sign up successful:", data);
      setUserData(data.user, e.target);
      // console.log(e.target.date.value);
      router.replace("/");
      // router.push("/success"); // Redirect to a success page
    }
  };
  return (
    <main className=" px-10 pb-20 flex flex-col  gap-12 h-screen overflow-y-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="Heading pt-12">
        <Heading heading={"Student Deatils"} />
      </div>
      <div className="details">
        <form action="" className="flex flex-col gap-6" onSubmit={signUp}>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Name</h1>
            <input
              name="name"
              type="text"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Email</h1>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              type="email"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Password</h1>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              type="password"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Confirm Password</h1>
            <input
              value={conPassword}
              onChange={(e) => {
                setConPassword(e.target.value);
              }}
              name="con-password"
              type="password"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Phone number</h1>
            <input
              name="phone"
              type="text"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Gender</h1>

            <select
              name="gender"
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141]"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            >
              <option disabled selected value="">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
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
            <h1 className="font-bold text-[#1C1B1F]">Date Of Birth</h1>
            <input
              name="date"
              type="date"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Weight</h1>
            <input
              name="weight"
              type="text"
              className=" h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmiting}
              className="bg-[#A61B1B] w-fit text-white px-3 py-1 rounded-full  "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
