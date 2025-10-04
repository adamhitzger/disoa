import BrandLogos from "@/components/brandLogos";
import StudiesCarousel from "@/components/caseStudies";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Services from "@/components/services";
import StatisticsMain from "@/components/statistics";
import { sanityFetch } from "@/sanity/lib/client";
import { CASESTUDIES_QUERY, HOMEPAGE_QUERY } from "@/sanity/lib/query";
import { BrandIcons, CaseStudies} from "@/types";

export default async function Home() {
  const brandIcons = await sanityFetch<BrandIcons>({query: HOMEPAGE_QUERY});
  const caseStudies = await sanityFetch<CaseStudies>({query: CASESTUDIES_QUERY});
  console.log(caseStudies)
  return (
    <>
    <Header 
    st_header="Nepřicházejte o zákazníky."
    nd_header="Buďte tam, kde jsou oni!"
    text={[ 
      "Budujeme pro Vás silnou přítomnost na ",
      "sociálních sítích, aby se Vaše značka dostala",
      " k těm správným lidem ve správný čas."
    ]}
    isWhite={true}
    button={false}/>
    <BrandLogos data={brandIcons}/>
    <Services/>
    <StudiesCarousel items={caseStudies}/>
    <StatisticsMain/>
    <Contact/>
    </>
  );
}
