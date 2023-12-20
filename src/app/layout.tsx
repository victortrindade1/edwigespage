import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { rubik } from "./fonts";
// import "animate.css/animate.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ed",
  description: "O melhor cuidado com seu pet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR' className={`${rubik.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
