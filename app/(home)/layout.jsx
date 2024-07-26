import React from "react";

function homeLayout({ children }) {
  return (
    <div>
      <main className="h-screen w-screen">
        {children}
        <div
          className="footer-nav uppercase  w-full h-[8vh] translate-y-[-8vh]"
          style={{ "box-shadow": "0px -3px 8px #d4d4d4" }}
        >
          <div className="text-[#0C1A30 flex justify-around items-center w-full h-full">
            <div>Home</div>
            <div>Request</div>
            <div>Certificate</div>
            <div>Profile</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default homeLayout;
