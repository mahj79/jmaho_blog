import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import { Space_Grotesk } from 'next/font/google'
import GoogleAnalytics from "./components/GoogleAnalytics";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Jack's Blog",
    template: "%s | Maho's Corner"
  },
  description: "Created by Jack Mahoney to blog about all things going through his head",
  openGraph: {
    title: {
      default: "Jack's Blog",
      template: "%s | Maho's Corner"
    },
    description: 'Created by Jack Mahoney to blog about all things going through his head',
    url: 'https://mahoscorner.com',
    siteName: "Maho's Corner",
    images: [
      {
        url: 'https://mahoscorner.com/_next/image?url=%2Fimages%2FMahos_Corner_Final.jpg&w=828&q=75', // Must be an absolute URL
        width: 200,
        height: 200,
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: "Jack's Blog",
      template: "%s | Maho's Corner"
    },
    description: "Created by Jack Mahoney to blog about all things going through his head",
    creator: '@mahoneyj50',
    images: ['https://mahoscorner.com/_next/image?url=%2Fimages%2FMahos_Corner_Final.jpg&w=828&q=75'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <head>
          <link rel="shortcut icon" href="/images/icon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/icon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/icon-16x16.png"/>
      </head>
   
      <body className="bg-gradient-to-r from-[#8faf93] from-0% to-phthalo to-50% text-slate-100">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-PPCT2EJWCF" />
        <Navbar />
        <MyProfilePic />
        {children}
        </body>

    </html>
  );
}
