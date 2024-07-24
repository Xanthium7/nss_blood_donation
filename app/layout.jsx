import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rudhiram",
  description: "Rudhiram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
