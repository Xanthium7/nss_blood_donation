"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button/Button";
import { supabase } from "@/utils/supabase/supabaseClient";
import { redirect } from "next/navigation";

function Signup() {
  // useEffect(() => {
  //   console.log(supabase.auth.user());
  // }, []);

  // const handelGoogleLogin = async () => {
  //   try {
  //     const { data, error } = await supabase.auth.signInWithOAuth({
  //       provider: "google",
  //       options: {
  //         queryParams: {
  //           access_type: "offline",
  //           prompt: "consent",
  //         },
  //       },
  //     });

  //     localStorage.setItem("user", JSON.stringify(data));
  //     redirect(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <div className="bg-primary-bg flex flex-col justify-center min-h-screen">
      <div className="center-items h-full gap-5 bg-blue-50 grow">
        <div>
          <Image
            src={"/auth/logo.svg"}
            alt="NSS Logo"
            width={250}
            height={250}
          ></Image>
        </div>
        <h1 className="text-4xl rubik-moonrocks-regular">രുധിരം</h1>
        <p className="text-xl font-semibold">രക്തദാനം മഹാദാനം</p>
        <Button
          onClick={handelGoogleLogin}
          bg={"white"}
          border={"2"}
          borderColor={"#A61B1B"}
          color={"#A61B1B"}
          text={"login"}
          width={"90"}
        />
        <Button
          bg={"#A61B1B"}
          border={"2"}
          borderColor={"#A61B1B"}
          color={"white"}
          text={"Create Account"}
          width={"90"}
        />
      </div>
      <div className="bg-[#A61B1B] p-8 center-items text-white">
        "ഒരു NSS യൂണിറ്റ്: 264 പദ്ധതി”
      </div>
    </div>
  );
}

export default Signup;
