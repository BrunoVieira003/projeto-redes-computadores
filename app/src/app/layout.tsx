import type { Metadata } from "next";
import "./globals.css";
import InstanceHeading from "@/components/instance-heading";
import { PublicEnvScript } from "next-runtime-env";

export const metadata: Metadata = {
  title: "Projeto redes",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
      </head>
      <body className="antialiased flex flex-col w-3/5 mx-auto my-44">
        <InstanceHeading/>
        {children}
      </body>
    </html>
  );
}
