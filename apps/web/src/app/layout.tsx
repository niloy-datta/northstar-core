import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHL Operations | Northstar Core",
  description: "Operations workspace and supplier directory showcase"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
