import { Metadata } from "next";
import "./globals.css";
import Navbar from "./nav/Navbar";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata: Metadata = {
  title: "Carsties",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar />
        <main className="container mx-auto px-5 pt-10">{children}</main>
      </body>
    </html>
  );
}
