import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solomon Sunday Ele-ojo | AI-Powered Software Developer",
  description:
    "Portfolio of Solomon Sunday Ele-ojo — AI-powered software developer, full-stack web and mobile developer, and data scientist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}