import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pi-Health",
  description: "Pi-health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
