import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const novatica = localFont({
   variable: "--font-novatica",
  display: "swap",
  src: [
    {
      path: "../public/fonts/novatica/light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/novatica/regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/novatica/medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/novatica/semibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/novatica/bold.woff2",
      weight: "700",
      style: "normal"
    },
  ]
})

const hk_gothic = localFont({
  variable: "--font-gothic",
  display: "swap",
  src: [
    {
      path: "../public/fonts/hk-gothic/light.woff2",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/hk-gothic/regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/hk-gothic/medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/hk-gothic/semibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/hk-gothic/bold.woff2",
      weight: "700",
      style: "normal"
    },
  ]
})


export const metadata: Metadata = {
  title: "Disoa",
  description:
    "Disoa Marketing – profesionální správa sociálních sítí, Meta Ads kampaní a produkce obsahu. Pomůžeme vaší značce růst a oslovit ty správné lidi v pravý čas.",
  icons: {
    icon: "/logos/star.png",
  },
  applicationName: "Disoa Marketing",
  generator: "Next.js",
  authors: [
    { name: "Jakub Doležal" },
  ],
  keywords: [
    "Disoa Marketing",
    "sociální sítě",
    "správa sociálních sítí",
    "Meta Ads",
    "Facebook reklama",
    "Instagram reklama",
    "online marketing",
    "digitální marketing",
    "produkce obsahu",
    "marketing pro firmy",
  ],
  creator: "Jakub Doležal",
  publisher: "Jakub Doležal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Disoa Marketing | Správa sociálních sítí, Meta Ads a produkce",
    description:
      "Disoa Marketing – partner pro efektivní online marketing. Zaměřujeme se na správu sociálních sítí, Meta Ads a produkci obsahu, která zaujme a prodává.",
    url: "https://disoa.cz",
    siteName: "Disoa Marketing",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${novatica.variable}  ${hk_gothic.variable} antialiased `}
      >
        <Navbar/>
        {children}
        <Footer/>
        <Toaster/>
      </body>
    </html>
  );
}