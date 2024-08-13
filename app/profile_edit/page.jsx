"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/supabaseClient";
import Heading from "../components/Heading";

function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dob, setDob] = useState("");
  const [weight, setWeight] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async (email) => {
      let { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email);
      if (users && users.length > 0) {
        setName(users[0].name);
        setBloodGroup(users[0].blood_grp);
        setDob(users[0].dob);
        setEmail(users[0].email);
        setPhone(users[0].phone);
        setGender(users[0].gender);
        setWeight(users[0].weight);
      } else {
        console.log("No user found");
        toast.error("No user found");
      }
    };

    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user && user.email) {
        fetchData(user.email);
      } else {
        // console.log("No user email found");
        toast.error("No user email found");
      }
    };

    fetchUser();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("users")
      .update({
        name: name,
        phone: phone,
        gender: gender,
        dob: dob,
        blood_grp: bloodGroup,
        weight: weight,
      })
      .eq("email", email)
      .select();

    if (error) {
      console.log(error);
    } else {
      // console.log("User data updated successfully:", data);
      router.replace("/profile");
    }
  };

  return (
    <div className="h-screen w-screen overflow-y-scroll">
      <div className="p-5 w-full h-full">
        <div className="pb-10">
          <Heading heading={"Edit profile"} />
        </div>
        <form action="" className="flex flex-col gap-6" onSubmit={updateUser}>
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Name</h1>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />

          <div>
            <h1 className="font-bold text-[#1C1B1F]">Phone Number</h1>
            <input
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Gender</h1>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] pl-4"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Blood Group</h1>
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              name="blood_group"
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] pl-4"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            >
              <option disabled value="">
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
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <hr />
          <div>
            <h1 className="font-bold text-[#1C1B1F]">Weight</h1>
            <input
              name="weight"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="h-12 w-full rounded-xl mt-2 focus:outline-[#b14141] p-5"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            />
          </div>
          <div className="flex justify-end pb-10">
            <button
              type="submit"
              className="bg-[#A61B1B] w-fit text-white px-3 py-1 rounded-full"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
