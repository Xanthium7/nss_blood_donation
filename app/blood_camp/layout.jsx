"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { RedirectStatusCode } from "next/dist/client/components/redirect-status-code";
import { GoHome } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function bloodCampLayout({ children }) {
  const router = useRouter();
  const redirect_profile = () => {
    router.push("/profile");
  };
  const redirect_home = () => {
    router.push("/");
  };
  const redirect_certif = () => {
    router.push("/blood_camp");
  };
  const redirect_request = () => {
    router.push("/blood_req");
  };

  return (
    <div>
      <main className="h-[100dvh] w-screen relative">
        {children}
        <div
          className="footer-nav uppercase  w-full h-[8vh]  absolute bottom-0"
          style={{ "box-shadow": "0px -3px 8px #d4d4d4" }}
        >
          <div className="text-[#0C1A30] flex justify-around items-center w-full h-full">
            <div
              onClick={redirect_home}
              className=" flex flex-col justify-center items-center gap-2 hover:text-[#DC143C]  cursor-pointer  w-24 h-16 rounded-xl transition-all"
            >
              <GoHome className="scale-[2]" />
              <h1 className="text-xs">Home</h1>
            </div>

            <div
              onClick={redirect_request}
              className=" flex flex-col justify-center items-center gap-2 hover:text-[#DC143C]   cursor-pointer  w-24 h-16 rounded-xl transition-all"
            >
              <LuListTodo className="scale-[2]" />
              <h1 className="text-xs">REQUEST</h1>
            </div>
            <div
              onClick={redirect_certif}
              className=" flex flex-col justify-center items-center gap-2 hover:text-[#DC143C]   cursor-pointer  w-24 h-16 rounded-xl transition-all"
            >
              <IoHeartOutline className="scale-[2]" />
              <h1 className="text-xs">BLOOD CAMP</h1>
            </div>
            <div
              onClick={redirect_profile}
              className=" flex flex-col justify-center items-center gap-2 hover:text-[#DC143C]   cursor-pointer  w-24 h-16 rounded-xl transition-all"
            >
              <FaRegUser className="scale-[2]" />
              <h1 className="text-xs">PROFILE</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default bloodCampLayout;
