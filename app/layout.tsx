import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JEMSTO | Smart & Secure College Fee Payments",
    template: "%s | JEMSTO",
  },
  description:
    "JEMSTO is a secure and easy-to-use payment platform that helps students pay college fees faster. Pay tuition, hostel, and exam fees with confidence.",
  keywords: [
    "JEMSTO",
    "college fee payment",
    "student fee payment",
    "university fees",
    "education payments",
    "online fee payment",
    "student payment gateway",
  ],
  authors: [{ name: "JEMSTO" }],
  creator: "JEMSTO",
  publisher: "JEMSTO",

  openGraph: {
    title: "JEMSTO | Smart College Fee Payments",
    description:
      "Pay your college fees securely and effortlessly with JEMSTO — the smart payment gateway for students and institutions.",
    url: "https://jemsto.netlify.app",
    siteName: "JEMSTO",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JEMSTO | Smart College Fee Payments",
    description:
      "A secure and seamless way for students to pay college fees online.",
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://jemsto.netlify.app"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
