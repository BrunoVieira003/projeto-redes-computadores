import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projeto redes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col w-3/5 mx-auto my-44">
        {children}
      </body>
    </html>
  );
}
