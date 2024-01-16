import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { rubik } from "./fonts";
// import "animate.css/animate.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Ed",
  description:
    "O melhor cuidado com seu pet. Atendimento à domicílio em Campos dos Goytacazes e região. Contato: (22) 99782-7997. Agende já uma consulta!",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
