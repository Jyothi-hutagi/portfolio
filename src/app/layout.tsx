import "./globals.css";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jyothi Hutagi",
  description: "Portfolio Website of Jyothi Hutagi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
