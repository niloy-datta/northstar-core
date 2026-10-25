import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHL Business System",
  description: "A dashboard for managing suppliers and business tasks"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
