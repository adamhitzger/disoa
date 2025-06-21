import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Disoa",
  description: "Disoa - Marketingová agentura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
