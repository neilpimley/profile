import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neil Pimley | Senior Software Developer",
  description:
    "Portfolio for Neil Pimley, an agentic software engineer and full-stack developer with experience across fintech and healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
