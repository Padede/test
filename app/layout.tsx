"use client";
import { ParamsContext, defaultContextData } from "@context/ParamsContext";
import "./globals.css";

import { Footer, NavBar } from "@components";
import { useState } from "react";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ctxData, setCtxData] = useState(defaultContextData);

  return (
    <html lang="en">
      <body className="relative">
        <ParamsContext.Provider value={{ ...ctxData, setValue: setCtxData }}>
          <NavBar />
          {children}
          <Footer />
        </ParamsContext.Provider>
      </body>
    </html>
  );
}
