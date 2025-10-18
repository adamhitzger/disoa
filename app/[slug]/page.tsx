import SlugComp from "@/components/slugComponent";
import { sanityFetch } from "@/sanity/lib/client";
import { CASESTUDY_QUERY } from "@/sanity/lib/query";
import { CaseStudy } from "@/types";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string}> }):Promise<Metadata> {
    const param = await params;
    const slug = param.slug
    const p: CaseStudy = await sanityFetch<CaseStudy>({ query: CASESTUDY_QUERY, params: {slug} });

return{
 icons: {
    icon: "/logos/star.png",
  },
  applicationName: "Disoa",
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
    p.name
  ],
  creator: "Jakub Doležal",
  publisher: "Jakub Doležal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Disoa Marketing | " + p.name,
    description:
      "Disoa Marketing – " +p.name + " - " + p.popis.slice(0,50),
    url: "https://disoa.cz/"+p.slug,
    siteName: "Disoa Marketing",
    locale: "cs_CZ",
    type: "website",
 
},
}
};

export default async function SlugPage({ params }: { params: Promise<{ slug: string}> }){
    const param = await params;
    const slug = param.slug;
    const caseStudy = await sanityFetch<CaseStudy>({query: CASESTUDY_QUERY, params: {slug}})
    return(
        <SlugComp item={caseStudy}/>
    )
}