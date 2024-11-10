import type { Metadata } from "next";
import "./globals.css";
import { fontClasses } from "@/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Amonic",
  description: "Etihad Airways",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontClasses} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
