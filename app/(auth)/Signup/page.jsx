"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button/Button";
import { supabase } from "@/utils/supabase/supabaseClient";

function Signup() {
  const handelGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {},
      });
    } catch (e) {
      console.log(e);
    }
  };
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
        <button
          onClick={handelGoogleLogin}
          class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg hover:shadow transition duration-150"
        >
          <Image
            class="w-6 h-6"
            height={24}
            width={24}
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          ></Image>
          <span className="text-black hover:font-semibold">
            Login with Google
          </span>
        </button>
      </div>
      <div className="bg-[#A61B1B] p-8 center-items text-white">
        "ഒരു NSS യൂണിറ്റ്: 264 പദ്ധതി ”
      </div>
    </div>
  );
}

export default Signup;
