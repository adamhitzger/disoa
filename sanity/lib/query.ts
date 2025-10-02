import { groq } from "next-sanity";

export const HOMEPAGE_QUERY = groq`*[_type == "brandIcons"]{
    "brandLogo": brandLogo.asset->url,
    brandLink
}`;

export const CASESTUDY_QUERY = groq`*[_type == "caseStudy" && slug.current == $slug][0]{
    "main": main.asset->url,
    "logo": logo.asset->url,
    name,
    "slug": slug.current,
    popis,
    from,
    to,
    services[],
    finishes[],
    tools[],
    results[],
    reels[]{
    "brandLogo": brandLogo.asset->url,
    brandLink
},
    "iphonePred": iphonePred.asset->url,
    "iphonePotom": iphonePotom.asset->url,
    statistics[]{
        text,
        to,
        endText,
    },
    igLink,
    fbLink
}`;

export const CASESTUDIES_QUERY = groq`*[_type == "caseStudy" ]{
    "main": main.asset->url,
    name,
    popis,
    "slug": slug.current,
}`;