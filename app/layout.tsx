import type {Metadata} from "next";
import {Inter, Noto_Sans_KR} from "next/font/google";
import "./globals.css";
import React from "react";
import {SessionProvider} from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });
const NotoSansKR = Noto_Sans_KR({
    subsets: ["latin"],
    weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "RunHub",
  description: "런허브",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <SessionProvider>
          <html lang="en">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <body className={NotoSansKR.className}>{children}</body>
          </html>
      </SessionProvider>
  );
}
