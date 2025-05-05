import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.scss";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MU/TH/UR 6000",
  description:
    "A 182 model 2.1 terabyte AI Mainframe that serves as the computer mainframe for the Nostromo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="https://i.imgur.com/As1x3D4.png" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} `}>
        {children}
      </body>
    </html>
  );
}
