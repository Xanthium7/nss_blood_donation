"use client";

import React from "react";
import Heading from "../components/Heading";
import { FaAngleLeft } from "react-icons/fa6";
import Popup from "reactjs-popup";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect } from "react";
import { supabase } from "@/utils/supabase/supabaseClient";
import { useState } from "react";
import { MdWaterDrop } from "react-icons/md";

const page = () => {
  const [AllBloodRequests, setAllBloodRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const get_all_req = async () => {
    let { data: blood_request, error } = await supabase
      .from("blood_request")
      .select("*");

    if (error) {
      console.error("Error fetching blood requests:", error);
    } else {
      setAllBloodRequests(blood_request);
      console.log("Blood requests:", blood_request);
      setLoading(false);
    }
  };

  useEffect(() => {
    get_all_req();
  }, []);

  return (
    <div className="h-screen w-screen  overflow-y-auto">
      <div className="px-5 pt-10">
        <div className="header ">
          <a href="/">
            <FaAngleLeft className="scale-[2]" />
          </a>
          <Heading heading={"Blood Requests"} />
        </div>
        <div className="details flex flex-col gap-6 items-center pt-16 pb-28 text-lg overflow-y-auto">
          {!loading ? (
            AllBloodRequests.map((e, i) => (
              <div
                className="bg-[#FFFAFA] rounded-xl p-5 h-[20vh] w-[80%] flex flex-col justify-around"
                style={{ "box-shadow": "0px 5px 4px #a7a7a7" }}
              >
                <h1>{e.name}</h1>
                <h1 className="font-bold text-[#A61B1B] text-xl">
                  {e.blood_group}
                </h1>
                <h1>{e.units} Units</h1>
                <h1>{e.hospital_name}</h1>

                <div className="flex  justify-center pt-2 ">
                  <Popup
                    className="rounded-xl "
                    trigger={
                      <button className="bg-[#938A8B] text-white px-3 py-1 rounded-full text-sm">
                        More Details
                      </button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="modal h-full overflow-scroll  px-6">
                        <div className="flex justify-end">
                          <button
                            className="close scale-150 pt-5 "
                            onClick={close}
                          >
                            &times;
                          </button>
                        </div>
                        <div className="header  mt-2 flex flex-col gap-10 relative">
                          <div className="flex justify-around">
                            <div className="flex flex-col gap-6 ">
                              <h1 className="text-left">Name</h1>
                              <h1 className="text-left">Group </h1>
                              <h1 className="text-left">Unit</h1>
                              <h1 className="text-left">Gender</h1>
                              <h1 className="text-left">Age</h1>
                              <h1 className="text-left h-16">Hospital</h1>
                              <h1 className="text-left">ByStander</h1>
                              <h1 className="text-left">Phone</h1>
                            </div>
                            <div className="flex flex-col gap-6">
                              <h1 className="text-center">:</h1>
                              <h1 className="text-center">:</h1>
                              <h1 className="text-center">:</h1>
                              <h1 className="text-center">:</h1>
                              <h1 className="text-center">:</h1>
                              <h1 className="text-center h-16">:</h1>
                              <h1 className="text-center">:</h1>
                              <h1 className="text-center">:</h1>
                            </div>
                            <div className="flex flex-col gap-6">
                              <h1 className="text-right">{e.name}</h1>
                              <h1 className="text-right text-[#A61B1B] font-semibold ">
                                {e.blood_group}
                              </h1>
                              <h1 className="text-right">{e.units}</h1>
                              <h1 className="text-right capitalize">
                                {e.gender}
                              </h1>
                              <h1 className="text-right">{e.age}</h1>
                              <h1 className="text-right w-full h-16">
                                {e.hospital_name}
                              </h1>
                              <h1 className="text-right">{e.bystander}</h1>
                              <h1 className="text-right">{e.phone}</h1>
                            </div>
                          </div>
                          <div className="flex  justify-center  ">
                            <a
                              href=""
                              className=" flex gap-2 px-3 my-1 text-lg rounded-full border border-[#20B764]"
                            >
                              <h1 className="font-medium text-[#494747]">
                                message
                              </h1>
                              <FaWhatsapp className="mt-2 scale-150 text-[#20B764]" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
            ))
          ) : (
            <div
              className="text-[#A61B1B] pt-36
             animate-bounce"
            >
              <MdWaterDrop className="scale-[3]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
