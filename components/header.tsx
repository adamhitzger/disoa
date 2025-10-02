"use client";
import Image from "next/image";
import { HeaderProps } from "@/types";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header({st_header, nd_header, text, button, logo, bg_img, link}: HeaderProps) {
    return(
       <header className="w-full text-center justify-center  border min-h-[400px] rounded-bl-[40px] md:rounded-bl-[100px] rounded-br-[40px] md:rounded-br-[100px] flex flex-col relative">
            <Image
        src={"/background.png"}
        alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
        fill
        priority 
        className={` object-cover object-center -z-10 rounded-bl-[40px] md:rounded-bl-[100px] rounded-br-[40px]`}
      />
    {bg_img && <Image
        src={bg_img}
        alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
        fill
        priority 
        className={`grayscale-100 object-cover bg-center object-center -z-20 rounded-bl-[40px] md:rounded-bl-[100px] rounded-br-[40px]`}
      />}
      {(logo && link) && 
      <Link href={link} className="w-40  h-40 m-auto flex flex-col items-center justify-center bg-white rounded-full size-96">
        <Image
        src={logo}
        alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
        width={500} 
        height={400}
        className={` grayscale-100 object-cover bg-center  object-center z-20`}
      />
        </Link>}
           <div className="w-fit flex flex-col space-y-4 m-auto">
            {st_header && <h1 className={`${nd_header ?"text-4xl sm:text-5xl xl:text-6xl" : "text-6xl sm:text-8xl xl:text-9xl"}  font-medium `}>{st_header}</h1>}
            {nd_header && <h2 className="text-4xl font-medium sm:text-5xl xl:text-6xl">{nd_header}</h2>}
            <p className="text-base font-light">
               {text && text.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
            </p>

        {button &&
        <Link href="/#kontakt" className="px-6 md:px-2 flex flex-row justify-start">
        <Button>začínáme</Button>
        </Link>
        }
        </div>
       </header> 
    )
}