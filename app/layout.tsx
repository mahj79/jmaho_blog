import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import HashScrollHandler from "./components/HashScrollHandler";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jack Mahoney — Software Engineer & Enterprise Architect",
    template: "%s | Maho's Corner",
  },
  description:
    "Portfolio and writing by Jack Mahoney — enterprise architect, software engineer, and creator of Maho's Corner in Chicago.",
  icons: {
    icon: [
      { url: "/images/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/icon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    title: {
      default: "Jack Mahoney — Software Engineer & Enterprise Architect",
      template: "%s | Maho's Corner",
    },
    description:
      "Portfolio and writing by Jack Mahoney — simplifying complex tech and building thoughtful systems.",
    url: "https://mahoscorner.com",
    siteName: "Maho's Corner",
    images: [
      {
        url: "https://mahoscorner.com/_next/image?url=%2Fimages%2FMahos_Corner_Final.jpg&w=828&q=75",
        width: 200,
        height: 200,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Jack Mahoney — Software Engineer & Enterprise Architect",
      template: "%s | Maho's Corner",
    },
    description:
      "Portfolio and writing by Jack Mahoney — simplifying complex tech and building thoughtful systems.",
    creator: "@mahoneyj50",
    images: [
      "https://mahoscorner.com/_next/image?url=%2Fimages%2FMahos_Corner_Final.jpg&w=828&q=75",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="shortcut icon" href="/images/icon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icon-16x16.png" />
      </head>

      <body className="bg-black">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-PPCT2EJWCF" />
        <HashScrollHandler />
        <Navbar />
        <div className="site-grid-surface">{children}</div>
      </body>
    </html>
  );
}
