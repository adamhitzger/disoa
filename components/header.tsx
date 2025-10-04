"use client";
import Image from "next/image";
import { HeaderProps } from "@/types";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header({st_header, nd_header, text, button, logo, bg_img, link, isWhite}: HeaderProps) {
    return(
       <header className="w-full text-center justify-center  min-h-screen flex flex-col relative">
{isWhite && <div className="w-full min-h-screen absolute bg-white -z-50"/>}

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
      <Link href={link} className="w-56  h-56 mx-auto my-80 flex flex-col  items-center justify-center bg-white rounded-full">
        <Image
        src={logo}
        quality={100}
        alt="Disoa marketing - budejeme Vaše sociální sítě aby je viděli ti správní lidé"
        width={600} 
        height={400}
        className={`  object-cover bg-center  object-center z-20`}
      />
        </Link>}
           <div className="w-fit flex flex-col space-y-6 m-auto">
            {st_header && <h1 className={`${nd_header ?"text-5xl sm:text-6xl xl:text-7xl" : "text-6xl sm:text-9xl xl:text-[9rem]"} `}>{st_header}</h1>}
            {nd_header && <h2 className="text-5xl sm:text-6xl xl:text-7xl">{nd_header}</h2>}
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