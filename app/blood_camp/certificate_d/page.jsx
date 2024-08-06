"use client";
import Certificate from "@/app/components/Certificate";
import Heading from "@/app/components/Heading";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { supabase } from "@/utils/supabase/supabaseClient";
import { fetchUser } from "@/utils/apis/api";

const page = () => {
  const [email, setEmail] = useState("");
  const [user, setuser] = useState();
  useEffect(() => {
    // const user = async () => {
    //   return await fetchUser();
    // };
    // console.log(user);

    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.log("ERRORRR: ", error.message);
      } else {
        console.log(user.email);
        setEmail(user.email);
        console.log(email);
        let { data: users, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", email);
        // console.log(user.email);
        if (error) {
          console.log("Error fetching user data:", error.message);
        } else {
          console.log("User data fetched successfully:", users);
        }
      }
    };
    getUser();
  }, []);
  const certificate = useRef();
  const router = useRouter();

  const handleDownload2 = () => {
    if (!certificate.current) {
      console.error("Certificate element is not available.");
      return;
    }

    html2canvas(certificate.current)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "mm", "a4");
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Convert dimensions to mm (assuming 96 DPI for canvas)
        const imgWidthMm = (imgWidth * 25.4) / 96;
        const imgHeightMm = (imgHeight * 25.4) / 96;

        // Add the image to the PDF with the same dimensions
        pdf.addImage(imgData, "PNG", 0, 0, imgWidthMm, imgHeightMm);
        pdf.save("certif.pdf");
        // router.replace("/");
      })
      .catch((error) => {
        console.error("Error generating canvas:", error);
      });
  };
  return (
    <div className="h-screen w-screen">
      <div className="pt-5">
        <FaAngleLeft
          className="scale-[2] cursor-pointer pl-2"
          onClick={() => {
            router.replace("/");
          }}
        />
        <div className="header px-10">
          <Heading heading={"Certificates"} />
        </div>
        <div className="certificate_holder flex flex-col  justify-center items-center  h-[60vh] w-full">
          <div
            className="w-full h-[50vh] flex justify-center items-center "
            ref={certificate}
          >
            <Certificate ref={certificate} name={"Oliva Rodrigo"} />
          </div>

          <div className="bg-[#c02424] px-3 py-1 rounded-md text-[#f8f0f0] transition-all hover:text-red-600 hover:bg-transparent">
            <button onClick={handleDownload2}>DOWNLOAD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
