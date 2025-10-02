"use client"

import { BrandLogo } from "@/types"
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';
import Image from "next/image";
import Link from "next/link";

export default function BrandLogos({data}: {data: Array<BrandLogo>}){
    return(
        <aside className="flex size-full py-4  items-center justify-center">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent className="flex flex-row">
        {data.map((d: BrandLogo, index: number) => (
          <MarqueeItem className="bg-background rounded-full ml-20 h-32 w-32 flex flex-col justify-center" key={index}>
            <Link href={d.brandLink}>
            <Image
            width={
                250
            }
            height={250}
              alt={`Placeholder ${index}`}
              className="overflow-hidden rounded-full"
              src={d.brandLogo}
            />
            </Link>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </aside>
    )
}