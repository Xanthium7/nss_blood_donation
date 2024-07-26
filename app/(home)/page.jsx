"use client";
import Image from "next/image";
import { useEffect } from "react";
import { supabase } from "@/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const cheksession = async () => {
    //function to check if the user is logged in or not it will be null if not logged in
    try {
      const { data, error } = await supabase.auth.getSession();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    cheksession().then((data) => {
      console.log(data);
      if (!data.session) {
        router.push("/Signup");
      }
    });
  }, []);

  return (
    <div className="h-full w-full relative flex flex-col ">
      <div className="banner flex flex-col gap-1 justify-center items-center  bg-[#A61B1B] h-1/5">
        <div>
          <h1
            className="text-white text-6xl  font-medium"
            style={{
              "text-shadow":
                " -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            രുധിര
            <img className="inline" src="/logo.png" alt="" />
          </h1>
        </div>
        <div>
          <h1 className="font-semibold text-lg">രക്തദാനം മഹാദാനം</h1>
        </div>
      </div>
      <div
        className="COA h-[30vh] mx-10  bg-[##FFFAFA]  shadow-md rounded-lg translate-y-[-2rem] z-30"
        style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
      >
        <div className="container w-full h-full flex bg-[#FFFAFA] rounded-lg justify-around items-center">
          <div
            className="request bg-[#FFFF] rounded-lg shadow-md h-[20vh] w-[30vw] flex flex-col gap-2 justify-center items-center"
            style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
          >
            <div className="icon max-w-[12vw]  md:max-w-[6vw] ">
              <img className=" rounded-lg" src="/request.png" alt="request" />
            </div>
            <h1 className="text-[#686868] font-semibold text-lg">REQUEST</h1>
          </div>
          <div
            className="Blood Camp bg-[#FFFF] rounded-lg shadow-md h-[20vh] w-[30vw] flex flex-col gap-2 justify-center items-center"
            style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
          >
            <div className="icon max-w-[20vw] md:max-w-[8vw]  ">
              <img
                className=" rounded-lg"
                src="/blood_camp.png"
                alt="blood_camp"
              />
            </div>
            <h1 className="text-[#686868] font-semibold text-lg">BLOOD CAMP</h1>
          </div>
        </div>
      </div>
      <div
        className="recent COA h-[30vh] mx-4 bg-[#FFFAFA]  shadow-md rounded-3xl "
        style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
      >
        <h1 className="text-[#A61B1B] font-semibold text-2xl pt-3 pl-3">
          Recent Requests
        </h1>
        <div className="flex flex-col justify-between h-[80%] w-full">
          <div className="container h-full w-full flex justify-between items-center px-4">
            <div
              className="bg-[#FFFF] p-4 rounded-lg"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            >
              <p>Deepak</p>
              <p className="text-[#A61B1B] font-semibold">A+ve</p>
              <p> 2 Units</p>
              <p>Kolencherry MOSC</p>
              <p>Medical College</p>
            </div>
            <div
              className="bg-[#FFFF] p-4 rounded-lg"
              style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
            >
              <p>Deepak</p>
              <p className="text-[#A61B1B] font-semibold">A+ve</p>
              <p> 2 Units</p>
              <p>Kolencherry MOSC</p>
              <p>Medical College</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <button className="bg-[#938A8B] px-2  rounded-full  text-white">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
