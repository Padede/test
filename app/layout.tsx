"use client";
import { ParamsContext, defaultContextData } from "@context/ParamsContext";
import "./globals.css";

import { Footer, NavBar } from "@components";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ctxData, setCtxData] = useState(defaultContextData);

  return (
    <html lang="en">
      <head>
        <title>Car Hub</title>
      </head>
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
