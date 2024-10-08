"use client";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { supabase } from "@/utils/supabase/supabaseClient";
import Certificate from "../components/Certificate";
import { FaAngleLeft } from "react-icons/fa";

const page = () => {
  const [certifs, setcertifs] = useState();

  const getCertifs = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    //console.log(user.email);
    const { data, error } = await supabase
      .from("certificate_table")
      .select("*")
      .eq("email", user.email);
    if (error) {
      console.log("Error fetching user data:", error.message);
      toast.error("Error fetching user data");
    } else {
      console.log("User data fetched successfully:", data);
      if (data && data.length > 0) {
        setcertifs(data);
      } else {
        console.log("No certificates found for the user.");
      }
    }
  };

  useEffect(() => {
    getCertifs();
  }, []);

  useEffect(() => {
    console.log(certifs);
  }, [certifs]);
  return (
    <div className="h-screen w-screen p-4">
      <div className="header ">
        <a href="/">
          <FaAngleLeft className="scale-[2]" />
        </a>
        <Heading heading={"Blood Requests"} />
      </div>
      <div>
        <div className="flex flex-wrap w-full gap-8 pt-14 justify-center items-center">
          {certifs &&
            certifs.map((certif, index) => (
              <div key={index} className="  w-44">
                <div className="flex justify-center items-center h-full w-full">
                  <Certificate name={certif.name} />
                </div>
                <div>
                  <h1 className="text-center">
                    {new Date(certif.created_at).toLocaleDateString()}
                  </h1>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default page;
