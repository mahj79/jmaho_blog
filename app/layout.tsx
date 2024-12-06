import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

export const metadata: Metadata = {
  title: {
    default: "Jack's Blog",
    template: "%s | Maho's Corner"
  },
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
          <link rel="shortcut icon" href="/images/icon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/icon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/icon-16x16.png"/>
      </head>
      <body className="bg-emerald-700 text-slate-100">
        <Navbar />
        <MyProfilePic />
        {children}
        </body>
    </html>
  );
}
