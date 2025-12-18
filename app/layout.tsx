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
    default: "ZEMSTO | Smart & Secure School Fee Payments",
    template: "%s | ZEMSTO",
  },
  description:
    "ZEMSTO is a secure and easy-to-use payment platform that helps students pay college fees faster. Pay tuition, hostel, and exam fees with confidence.",
  keywords: [
    "ZEMSTO",
    "school fee payment",
    "student fee payment",
    "school fees",
    "education payments",
    "online fee payment",
    "student payment gateway",
  ],
  authors: [{ name: "ZEMSTO" }],
  creator: "ZEMSTO",
  publisher: "ZEMSTO",

  openGraph: {
    title: "ZEMSTO | Smart School Fee Payments",
    description:
      "Pay your school fees securely and effortlessly with ZEMSTO — the smart payment gateway for students and institutions.",
    url: "https://zemsto.netlify.app",
    siteName: "ZEMSTO",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ZEMSTO | Smart School Fee Payments",
    description:
      "A secure and seamless way for students to pay school fees online.",
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://zemsto.netlify.app"),
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
