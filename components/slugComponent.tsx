"use client"

import { BrandLogo, CaseStudy } from "@/types"
import Header from "./header"
import { Statistics } from "./statistics"
import { Carousel, CarouselContent } from "./ui/carousel"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function SlugComp({item}: {item:CaseStudy}){
     const plugin = useRef(Autoplay({
            delay: 3000, 
        }))
        const [ndImg, setNdImg] = useState<boolean>(false)
        console.log(ndImg)
    return(
        <main className="flex flex-col overflow-x-hidden min-h-screen">
        <Header button={false} logo={item.logo} bg_img={item.main} link={item.igLink} isWhite={true}/>
         <section className="w-full flex flex-col p-20 justify-center bg-white">
            <div className={"w-full sm:w-4/5 max-w-4xl mx-auto flex flex-col"}>
               <h2 className="text-4xl normal-case sm:text-5xl font-light ">{item.name}</h2>
                <div className="max-w-4xl w-full  mx-auto flex flex-col sm:flex-row gap-5">
                 
                <div className="space-y-2 mt-2 w-full sm:w-2/3 flex flex-col justify-start">
                   <div className="w-full flex flex-row text-xl text-cp-brown">
                         {item.services && item.services.map((line, i) => (
                                <React.Fragment key={i}>
                                  {line + "  "} 
                                </React.Fragment>
                              ))}
                              
                   </div>
                   <p className="text-base max-w-[450px] font-light ">
                        {item.popis}
                    </p>
                </div>
                <div className="w-full flex flex-col mt-2 sm:w-1/3">
                    <span className="text-xl text-cp-brown">Trvání spolupráce</span>
                    <span className="font-light">{item.from} - {item.to}</span>
                </div>
                </div>
            </div>
         </section>
                 <section id="karty" className={`w-full bg-cp-white/30 flex flex-col justify-center items-center`}>
                    <div className="max-w-5xl flex flex-col py-12 rounded-xl">
                        <div className="w-full grid gap-5  grid-cols-1 sm:grid-cols-3">
                            <div  className={cn(`hover:scale-105 group/bento  text-white flex flex-col space-y-2  max-h-full rounded-[45px] bg-cp-white px-16 py-10  transition duration-200 hover:shadow-xl`)}>
                <div className={`w-full flex flex-col justify-between
                  `}>
                    <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="48" height="48"
          viewBox="0 0 30 30" 
          preserveAspectRatio="xMidYMid meet"
          version="1.0">
        
        
          <g>
            <path fill="#ff7d1d" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
          </g>
        </svg>
        <span className="text-[2.4rem]  font-gothic font-light [word-spacing:0.2px] md:text-nowrap">Cíle</span>
                </div>
                <p className={`font-gothic leading-5.5 text-xl font-extralight `}>
                  {item.finishes && item.finishes.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                </p>
              </div>
        
               <div  className={cn(`hover:scale-105  group/bento text-white flex flex-col justify-between  max-h-full rounded-[45px] bg-cp-brown px-16 py-10  transition duration-200 hover:shadow-xl`)}>
                <div className={`w-full flex flex-col justify-between `}>
                    <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="48" height="48"
          viewBox="0 0 30 30" 
          preserveAspectRatio="xMidYMid meet"
          version="1.0">
        
        
          <g>
            <path fill="#d4d1c9" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
          </g>
        </svg>
        <span className="text-[2.4rem]  font-gothic font-light [word-spacing:0.2px] md:text-nowrap">Nástroje</span>
                </div>
                <p className={`font-gothic ${item.tools.length === 2 && "mb-5"} text-xl leading-5.5 font-extralight `}>
                  {item.tools && item.tools.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                </p>
              </div>
        
               <div  className={cn(`hover:scale-105  group/bento text-white flex flex-col justify-between px-16 py-10   rounded-[45px] bg-cp-orange transition duration-200 hover:shadow-xl`)}>
                <div className={`w-full flex flex-col`}>
                    <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="48" height="48"
          viewBox="0 0 30 30" 
          preserveAspectRatio="xMidYMid meet"
          version="1.0">
        
        
          <g>
            <path fill="#655948" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
          </g>
        </svg>
        <span className="text-[2.4rem]  font-gothic font-light [word-spacing:0.2px] md:text-nowrap">Výsledky</span>
                </div>
                <p className={`font-gothic leading-5.5 text-xl font-extralight `}>
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
        {item.reels !== null && item.reels.length > 0 && <Carousel 
              opts={{
    loop: true,
  }} plugins={[plugin.current]}   className="w-full bg-cp-white/30 min-h-screen flex row justify-center">
                  <CarouselContent className="gap-5 w-fit mx-auto">
                    {item.reels.map((c:BrandLogo,i: number) => (
                      <Link href={c.brandLink} key={i} className="text-background  flex flex-col justify-between p-8  rounded-2xl sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 ">
                      
                         <Image
                                src={c.brandLogo}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                width={850}
                                height={1200}
                                className="object-cover max-w-96 rounded-2xl object-center z-10"
                              /> 
                       
                      </Link>
                    ))}
                  </CarouselContent>
                </Carousel>}
        <Statistics  heading="Klíčové výsledky" items={item.statistics} pColor="text-background"/>
        <section id="statistiky" className="w-full  bg-cp-white/30 flex flex-col justify-center pt-4 px-4 items-center" style={{backgroundImage: "url("+"/background.png"+")"}}>
            <div className="max-w-4xl flex flex-col px-8 pt-8 rounded-xl justify-between">
                <h2 className="text-5xl font-light my-10">Předtím VS potom</h2>
                <div className="w-full mt-10 hidden items-center sm:flex sm:flex-row ">
                  
                  <div className="w-full sm:w-1/2 relative">

                  <Image
                                src={item.iphonePred}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                width={350}
                                height={700}
                                className="object-cover max-h-[33rem] rounded-2xl object-top"
                              />
                  </div>
                   <div className="w-full sm:w-1/2 ">
                               <Image
                                src={item.iphonePotom}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                width={350}
                                height={700}
                                className="object-cover max-h-[33rem] rounded-2xl object-top"
                              />
                              </div>
                  
                </div>

                 <div className="w-full mt-10 flex flex-col items-center sm:hidden ">
                  {ndImg ?
                   <div className="w-full sm:w-1/2 relative">

                  <Image
                                src={item.iphonePred}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                width={350}
                                height={700}
                                className="object-cover max-h-[25rem] rounded-2xl object-top"
                                onClick={() => setNdImg(!ndImg)}
                              />
                  </div>
                  :
                   <div className="w-full sm:w-1/2 ">
                               <Image
                                src={item.iphonePotom}
                                alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
                                width={350}
                                height={700}
                                className="object-cover max-h-[25rem] rounded-2xl object-top"
                                onClick={() => setNdImg(!ndImg)}
                              />
                              </div>
                  }
                 
                </div>
            </div>
        </section>
        </main>
    )
}