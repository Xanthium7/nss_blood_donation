"use client";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { supabase } from "@/utils/supabase/supabaseClient";
import Certificate from "../components/Certificate";

const page = () => {
  const [certifs, setcertifs] = useState();

  const getCertifs = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user.email);
    const { data, error } = await supabase
      .from("certificate_table")
      .select("*")
      .eq("email", user.email);
    if (error) {
      console.log("Error fetching user data:", error.message);
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
    <div className="h-screen w-screen">
      <div className="px-6 pt-5">
        <Heading heading={"Certificates"} />
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
    </div>
  );
};

export default page;
