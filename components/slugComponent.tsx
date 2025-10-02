"use client"

import { BrandLogo, CaseStudy } from "@/types"
import Header from "./header"
import { Statistics } from "./statistics"
import { Carousel, CarouselContent } from "./ui/carousel"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import React, { useRef } from "react"
import { cn } from "@/lib/utils"
export default function SlugComp({item}: {item:CaseStudy}){
     const plugin = useRef(Autoplay({
            delay: 3000, 
        }))
    return(
        <main className="flex flex-col min-h-screen">
        <Header button={false} logo={item.logo} bg_img={item.main} link={item.igLink}/>
         <section className="w-full flex flex-col py-4">
            <div className={"w-full sm:w-4/5 max-w-4xl mx-auto flex flex-col"}>
               <h2 className="text-4xl">{item.name}</h2>
                <div className="max-w-4xl w-full  mx-auto flex flex-col sm:flex-row gap-5">
                 
                <div className="space-y-2 mt-2 w-full sm:w-2/3 flex flex-col justify-start">
                   <div className="w-full flex flex-row text-xl text-cp-brown">
                         {item.services && item.services.map((line, i) => (
                                <React.Fragment key={i}>
                                  {line + "  "} 
                                </React.Fragment>
                              ))}
                              
                   </div>
                   <p className="text-sm max-w-80">
                        {item.popis}
                    </p>
                </div>
                <div className="w-full flex flex-col mt-2 sm:w-1/3">
                    <span className="text-xl text-cp-brown">Trvání spolupráce</span>
                    <span className="">{item.from} - {item.to}</span>
                </div>
                </div>
            </div>
         </section>
                 <section id="karty" className={`w-full  flex flex-col justify-center p-4 items-center`}>
                    <div className="max-w-4xl flex flex-col p-8 rounded-xl space-y-4">
                        <div className="w-full grid gap-5 grid-cols-3">
                            <div  className={cn(`group/bento text-white flex flex-col justify-between  max-h-full rounded-[25px] bg-cp-white p-8 transition duration-200 hover:shadow-xl`)}>
                <div className={`w-full flex flex-col justify-between`}>
                    <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="40" height="40"
          viewBox="0 0 30 30" 
          preserveAspectRatio="xMidYMid meet"
          version="1.0">
        
        
          <g>
            <path fill="#ff7d1d" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
          </g>
        </svg>
        <span className="text-3xl  font-gothic font-medium [word-spacing:0.2px] md:text-nowrap">Cíle</span>
                </div>
                <p className={`font-gothic text-base font-light `}>
                  {item.finishes && item.finishes.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                </p>
              </div>
        
               <div  className={cn(`group/bento text-white flex flex-col justify-between  max-h-full rounded-[25px] bg-cp-brown p-8 transition duration-200 hover:shadow-xl`)}>
                <div className={`w-full flex flex-col justify-between`}>
                    <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="40" height="40"
          viewBox="0 0 30 30" 
          preserveAspectRatio="xMidYMid meet"
          version="1.0">
        
        
          <g>
            <path fill="#d4d1c9" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
          </g>
        </svg>
        <span className="text-3xl  font-gothic font-medium [word-spacing:0.2px] md:text-nowrap">Nástroje</span>
                </div>
                <p className={`font-gothic text-base font-light `}>
                  {item.tools && item.tools.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                </p>
              </div>
        
               <div  className={cn(`group/bento text-white flex flex-col justify-between  max-h-full rounded-[25px] bg-cp-orange p-8 transition duration-200 hover:shadow-xl`)}>
                <div className={`w-full flex flex-col justify-between`}>
                    <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="40" height="40"
          viewBox="0 0 30 30" 
          preserveAspectRatio="xMidYMid meet"
          version="1.0">
        
        
          <g>
            <path fill="#655948" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
          </g>
        </svg>
        <span className="text-3xl  font-gothic font-medium [word-spacing:0.2px] md:text-nowrap">Výsledky</span>
                </div>
                <p className={`font-gothic text-base font-light `}>
                   {item.results && item.results.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                </p>
              </div>
                         </div>
                    </div>
                </section>
        <Carousel 
              opts={{
    loop: true,
  }} plugins={[plugin.current]}   className="w-full">
                  <CarouselContent className="gap-5 w-fit mx-auto">
                    {item.reels.map((c:BrandLogo,i: number) => (
                      <Link href={c.brandLink} key={i} className="text-background  flex flex-col justify-between p-8  rounded-2xl sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 ">
                      <div className="bg-cp-white p-2 flex flex-row justify-center rounded-3xl">
                         <Image
                                src={c.brandLogo}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                width={550}
                                height={900}
                                className="object-cover max-w-68 rounded-2xl object-center z-10"
                              />
                        </div>    
                       
                      </Link>
                    ))}
                  </CarouselContent>
                </Carousel>
        <Statistics  heading="Klíčové výsledky" items={item.statistics} pColor="text-background"/>
        <section id="statistiky" className="w-full  flex flex-col justify-center p-4 items-center">
            <div className="max-w-4xl flex flex-col bg-background p-8 rounded-xl space-y-4">
                <h2 className="text-5xl ">Předtím VS potom</h2>
                <div className="w-full flex flex-col items-center sm:flex-row ">
                  <Link href={item.igLink} className="w-full sm:w-1/2 relative">

                  <Image
                                src={item.iphonePred}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                width={350}
                                height={600}
                                className="object-cover  rounded-2xl object-top"
                              />
                  </Link>
                   <Link href={item.igLink} className="w-full sm:w-1/2 ">
                               <Image
                                src={item.iphonePotom}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                width={350}
                                height={600}
                                className="object-cover  rounded-2xl object-top"
                              />
                              </Link>
                </div>
            </div>
        </section>
        </main>
    )
}