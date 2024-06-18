import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jack's Blog",
  description: "Created by Jack to blog about all things going through his head",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app/favicon.ico" sizes="any"/>
      </head>
      <body className="bg-emerald-700 text-slate-100">
        <Navbar />
        <MyProfilePic />
        {children}
        </body>
    </html>
  );
}
