export interface CaseStudy {
  main: string;
  logo: string;
  name: string;
  slug:string;
  popis: string;
  from: string;
  to: string;
  services: Array<string>;
  tools:Array<string>;
  finishes: Array<string>;
  results:Array<string>;
  reels:Array<BrandLogo>;
  iphonePred: string;
  iphonePotom: string;
  statistics: StatisticsItems;
  igLink: string;
  fbLink: string;
}

export interface HeaderProps {
    st_header?: string; 
    nd_header?: string;
    text?: string[];
    button: boolean;
    bg_img?: string;
    logo?: string;
    link?: string;
    isWhite?: boolean
}

export interface ActionRes<T> {
  success: boolean,
  message: string;
  submitted: boolean;
  errors?: {
    [K in keyof T]?: string[]
  };
  inputs?: T 
}

export interface BrandLogo {
    brandLogo: string;
    brandLink: string;
}

export type BrandIcons = Array<BrandLogo>;

export interface StatisticsItem {text: string, to:number, endText: string}
export type StatisticsItems = Array<StatisticsItem>;
export type CaseStudies = Array<CaseStudy>