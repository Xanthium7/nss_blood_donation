"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
// import { MdWaterDrop } from "react-icons/md";

export default function Home() {
  const router = useRouter();
  const [AllBloodRequests, setAllBloodRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const get_all_req = async () => {
    let { data: blood_request, error } = await supabase
      .from("blood_request")
      .select("*")
      .range(0, 1);

    if (error) {
      console.error("Error fetching blood requests:", error);
    } else {
      setAllBloodRequests(blood_request);
      setLoading(false);
      // console.log("Blood requests:", blood_request);
    }
  };

  useEffect(() => {
    get_all_req();
  }, []);

  useEffect(() => {
    console.log("STATE: ", AllBloodRequests);
  }, [AllBloodRequests]);
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
    const channels = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "blood_request" },
        (payload) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();
  }, []);

  return (
    <div className="h-screen w-screen relative flex flex-col ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="banner flex flex-col gap-1 pt-5 items-center  bg-[#A61B1B] h-1/5">
        <div className="text-white text-sm">NSS UNIT NO:264 INITIATIVE</div>
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
          <h1 className="font-semibold md:text-lg">രക്തദാനം മഹാദാനം</h1>
        </div>
      </div>
      <div
        className="COA py-10 mx-6  bg-[#FFFAFA]  shadow-md rounded-lg translate-y-[-2rem] z-30"
        style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
      >
        <div className="container w-full h-full flex bg-[#FFFAFA] rounded-lg justify-around items-center">
          <div
            onClick={() => {
              router.push("/blood_req");
            }}
            className="request cursor-pointer  bg-[#FFFF] rounded-lg shadow-md h-[18vh] min-w-[35vw] flex flex-col gap-2 justify-center items-center"
            style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
          >
            <div className="icon max-w-[12vw]  md:max-w-[6vw] ">
              <img className=" rounded-lg" src="/request.png" alt="request" />
            </div>
            <h1 className="text-[#686868] font-semibold text-lg text-center">
              REQUEST
            </h1>
          </div>
          <div
            onClick={() => {
              router.push("/blood_camp");
            }}
            className="Blood Camp bg-[#FFFF] hover:cursor-pointer rounded-lg shadow-md h-[18vh] min-w-[35vw] flex flex-col gap-2 justify-center items-center"
            style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
          >
            <div className="icon max-w-[20vw] md:max-w-[8vw]  ">
              <img
                className=" rounded-lg"
                src="/blood_camp.png"
                alt="blood_camp"
              />
            </div>
            <h1 className="text-[#686868] font-semibold text-lg text-center">
              BLOOD CAMP
            </h1>
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
        <div className="flex flex-col justify-between h-[80%] w-full ">
          <div className="container h-full w-full flex justify-between items-center px-4 gap-3 py-4">
            {!loading && AllBloodRequests.length > 0 ? (
              <>
                <div
                  className="bg-[#FFFF] p-4 rounded-lg w-1/2 h-full"
                  style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
                >
                  <p>{AllBloodRequests[0].name}</p>
                  <p className="text-[#A61B1B] font-semibold">
                    {AllBloodRequests[0].blood_group}
                  </p>
                  <p>{AllBloodRequests[0].units} Units</p>

                  <p>{AllBloodRequests[0].hospital_name}</p>
                </div>
                <div
                  className="bg-[#FFFF] p-4 rounded-lg w-1/2 h-full"
                  style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
                >
                  <p>{AllBloodRequests[1].name}</p>
                  <p className="text-[#A61B1B] font-semibold">
                    {AllBloodRequests[1].blood_group}
                  </p>
                  <p>{AllBloodRequests[1].units} Units</p>

                  <p>{AllBloodRequests[1].hospital_name}</p>
                </div>
              </>
            ) : (
              <div
                className="text-[#A61B1B] w-full h-full flex justify-center items-center py-[7vh]
             "
              >
                {/* <MdWaterDrop className="scale-[3]" /> */}
                <p className="">No Recent Request</p>
              </div>
            )}
          </div>
          <div className="w-full flex justify-center items-center ">
            <button className="bg-[#938A8B] px-2  rounded-full  text-white">
              <a href="/all_requests">See All</a>
            </button>
          </div>
          <div className="flex justify-center items-start sh:-translate-y-15 translate-y-10">
            <Image
              height={150}
              width={150}
              src="/mits.png"
              alt="mits logo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
