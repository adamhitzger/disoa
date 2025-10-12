import type { Metadata } from "next";
import { Hanken_Grotesk, Roboto_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const gothic = Hanken_Grotesk({
  variable: "--font-gothic",
  subsets: ["latin"]
})

const roboto = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Disoa Marketing",
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
        className={`overflow-x-hidden ${gothic.variable} ${roboto.variable} antialiased `}
      >
        <Navbar/>
        {children}
        <Footer/>
        <Toaster/>
      </body>
    </html>
  );
}