import Cards from "@/components/cards";
import StudiesCarousel from "@/components/caseStudies";
import Contact from "@/components/contact";
import Header from "@/components/header";
import { Statistics } from "@/components/statistics";
import { socialCards, socialStatistics } from "@/constants";
import { sanityFetch } from "@/sanity/lib/client";
import { CASESTUDIES_QUERY } from "@/sanity/lib/query";
import { CaseStudies } from "@/types";

export default async function SocialNetPage(){
    const caseStudies = await sanityFetch<CaseStudies>({query: CASESTUDIES_QUERY})
    return(
        <>
        <Header 
            st_header="SOCIÁLNÍ SÍTĚ" 
            button
            text={[
                "Budujte silnou značku tam, kde tráví lidé nejvíc času. Vytvoříme",
                "pro Vás obsah, který zaujme, vyvolá emoce a promění sledující ve",
                "věrné zákazníky. Sociální sítě nejsou jen o příspěvcích - jsou",
                "nejrychlejší cestou k budování důvěry, vztahů a prodejů."
            ]}
            isWhite={false}
        />
        <Statistics items={socialStatistics} pColor="text-foreground"/>
        <StudiesCarousel items={caseStudies}/>
        <Cards items={socialCards}/>
        <Contact/>
        </>
    )
}