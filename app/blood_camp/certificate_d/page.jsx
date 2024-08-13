"use client";
// import Certificate from "@/app/components/Certificate";
// import Heading from "@/app/components/Heading";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { supabase } from "@/utils/supabase/supabaseClient";
// import { fetchUser } from "@/utils/apis/api";

const page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.log("ERRORRR: ", error.message);
      } else {
        // console.log(user.email);
        let { data: certificate_table, error1 } = await supabase
          .from("certificate_table")
          .select("*")
          .eq("email", user.email);
        // redirecting user if they havent registered in blood camp
        // console.log("porath", certificate_table[0].name);
        if (typeof certificate_table[0].name == "undefined") {
          router.push("/");
          // console.log("akath", certificate_table[0].name);
        } else {
          let { data: users, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", user.email);
          // console.log(user.email);
          if (error) {
            console.log("Error fetching user data:", error.message);
          } else {
            setName(users[0].name);
            // console.log("User data fetched successfully:", users[0].name);
          }
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

    html2canvas(certificate.current, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Convert dimensions to mm (assuming 96 DPI for canvas)
        const imgWidthMm = (imgWidth * 18.4) / 96;
        const imgHeightMm = (imgHeight * 18.4) / 96;
        const pdf = new jsPDF("l", "mm", [imgWidthMm, imgHeightMm], true);

        // Add the image to the PDF with the same dimensions
        pdf.addImage(imgData, "PNG", 0, 0, imgWidthMm, imgHeightMm);
        pdf.save("certif.pdf");
        // router.replace("/");
      })
      .catch((error) => {
        console.error("Error generating canvas:", error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="pt-5">
        <FaAngleLeft
          className="scale-[2] cursor-pointer pl-2"
          onClick={() => {
            router.replace("/");
          }}
        />
        {/* <div className="header px-10">
          <Heading heading={"Certificates"} />
        </div> */}
        <div className="certificate_holder flex flex-col  justify-center items-center  h-[60vh] w-full">
          <div
            className="w-full h-[50vh] flex justify-center items-center "
            ref={certificate}
          >
            <h1
              // style={{ "-webkit-text-stroke": "1px #cf0a4c" }}
              className="text-2xl font-bold text-center text-green-500 "
            >
              REGISTRATION SUCCESSFUL
              <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
