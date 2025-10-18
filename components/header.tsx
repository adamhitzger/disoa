"use client";
import Image from "next/image";
import { HeaderProps } from "@/types";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Header({st_header, nd_header, text, button, logo, bg_img, link, isWhite}: HeaderProps) {
  
  return(
       <header className="w-full text-center justify-center items-center min-h-screen flex flex-col relative">
{isWhite ? <div className=" w-full min-h-screen absolute bg-white -z-50"/> : <div className="w-full min-h-screen absolute bg-cp-lightwhite -z-50"/>}

            <Image
        src={"/background.png"}
        alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
        fill
        priority 
        className={` object-cover object-center -z-10 rounded-bl-[6em] rounded-br-[6em]`}
      />
    {bg_img && <Image
        src={bg_img}
        alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
        fill
        quality={100}
        priority 
        className={`grayscale-100 object-cover bg-center object-center -z-20 rounded-bl-[6em] rounded-br-[6em]`}
      />}
      {(logo && link) && 
      <Link href={link} className="p-4 w-56  h-56 mx-auto mt-60 flex flex-col  items-center justify-center bg-white rounded-full">
        <Image
        src={logo}
        quality={100}
        alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
        width={400} 
        height={400}
        className={`object-cover bg-center rounded-bl-[6em] rounded-br-[6em]  object-center z-20`}
      />
        </Link>}
           <div className="rounded-bl-[6em] rounded-br-[6em] w-fit  flex flex-col space-y-6 p-3 m-auto">
            {st_header && <h1 className={`normal-case ${nd_header ?"text-5xl sm:text-6xl xl:text-7xl" : "text-6xl sm:text-8xl xl:text-[9rem]"} `}>{st_header}</h1>}
            {nd_header && <h2 className="normal-case text-5xl sm:text-6xl xl:text-7xl">{nd_header}</h2>}
            <p className="text-xl font-light">
               {text && text.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
            </p>

        {button &&
        <Link href="/#kontakt" className=" flex flex-row justify-center">
        <Button className="px-12 py-6">začínáme</Button>
        </Link>
        }
        </div>
       </header> 
    )
}