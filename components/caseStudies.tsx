"use client"

import { CaseStudies, CaseStudy } from "@/types"
import { ArrowDownRight, ArrowUpLeft} from "lucide-react"
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
        <section className="flex flex-col items-center w-full bg-cp-brown py-20 space-y-10 min-h-screen">
            <div className="w-full flex flex-row justify-between sm:w-4/5 ">
                <h2 className="text-background font-light mx-4 text-6xl sm:text-7xl">Case studies</h2>
                <div className="flex flex-row w-fit ">
                <ArrowUpLeft className=" size-22 text-cp-orange" onClick={() => scrollPrev()} strokeWidth={1}/>
                <ArrowDownRight className="size-22 text-cp-orange" onClick={() => scrollNext()} strokeWidth={1}/>
                </div>
              
            </div>
              <Carousel 
              opts={{
    loop: true,
  }} plugins={[plugin.current]}  setApi={setApi} className="w-full  rounded-2xl  flex flex-row ">
                  <CarouselContent className="flex flex-row  mx-auto ">
                    {items.map((c:CaseStudy,i: number) => (
                      <Link href={"/"+c.slug} key={i} className="mx-auto text-background flex flex-col justify-end pl-10 pb-5 pr-20  rounded-[3em] h-[32rem] w-96 bg-gradient-to-b from-transparent via-transparent to-cp-orange sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 ">
                      
                         <Image
                                src={c.main}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                fill
                                priority 
                                className="object-cover max-w-96  grayscale-90 rounded-[3em] object-center -z-10"
                              />
                             
                        <div className="w-full  flex flex-col my-6 space-y-2">
                            <h3 className="font-light  text-4xl text-wrap">{c.name}</h3>
                            <p className="font-light text-base">
                              {c.popis.slice(0,110)+"..."}
                            </p>
                        </div>
                      </Link>
                    ))}
                  </CarouselContent>
                </Carousel>
        </section>
    )
}