"use client"

import { CaseStudies, CaseStudy } from "@/types"
import { ArrowDownRight, ArrowUpLeft, ArrowUpRight } from "lucide-react"
import { type CarouselApi, Carousel, CarouselContent} from "./ui/carousel"
import { useState, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
export default function StudiesCarousel({items}: {items: CaseStudies}){
   const [api, setApi] = useState<CarouselApi>()
   const plugin = useRef(Autoplay({
        delay: 5000, 
    }))
    const scrollPrev = useCallback(() => {
        api?.scrollPrev()
      }, [api])
    
      const scrollNext = useCallback(() => {
        api?.scrollNext()
      }, [api])
    return(
        <section className="flex flex-col w-full bg-cp-brown p-8">
            <div className="mx-auto w-full flex flex-row justify-between sm:w-4/5">
                <h2 className="text-background text-5xl">Case studies</h2>
                <div className="flex items-center flex-row gap-2">
                <ArrowUpLeft className="size-14 text-cp-orange" onClick={() => scrollPrev()} strokeWidth={1.5}/>
                <ArrowDownRight className="size-14 text-cp-orange" onClick={() => scrollNext()} strokeWidth={1.5}/>
                </div>
              
            </div>
              <Carousel 
              opts={{
    loop: true,
  }} plugins={[plugin.current]}  setApi={setApi} className="w-full">
                  <CarouselContent>
                    {items.map((c:CaseStudy,i: number) => (
                      <Link href={"/"+c.slug} key={i} className="text-background flex flex-col justify-between p-8 rounded-2xl min-h-96 max-w-68 bg-gradient-to-b from-transparent via-transparent to-cp-orange sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 ">
                      
                         <Image
                                src={c.main}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                fill
                                priority 
                                className="object-cover max-w-68 grayscale-100 rounded-2xl object-center -z-10"
                              />
                        <div className="flex flex-row justify-end">
                          <ArrowUpRight className="size-18 " strokeWidth={1}/>
                        </div>      
                        <div className="w-full flex flex-col space-y-2">
                            <h3 className="font-medium text-3xl">{c.name}</h3>
                            <p className="font-light">
                              {c.popis.slice(0,50)+"..."}
                            </p>
                        </div>
                      </Link>
                    ))}
                  </CarouselContent>
                </Carousel>
        </section>
    )
}