import { Inter } from "next/font/google";
import "./globals.css";
import Pwa from "./components/pwa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rudhiram",
  description: "Rudhiram",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Pwa />
        {children}
      </body>
    </html>
  );
}
