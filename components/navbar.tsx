"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

 const Navbar = ({
  className,
}: {
 
  className?: string;
}) => {
const imgRef = useRef<HTMLImageElement>(null);
useEffect(() => {
    gsap.to(imgRef.current, {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
            trigger: document.body,
            start:"top bottom",
            end: "bottom top",
            scrub: true
        }
    })
}, [])
  return (
 
      <nav
        className={cn(
          "flex max-w-fit  text-foreground fixed top-10 inset-x-0 mx-auto  rounded-full  bg-cp-lightwhite shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
       <Link
            href={"/"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
           <Image ref={imgRef} src={"/logos/star.svg"} alt="Logo Disoa Marketing" width={44} height={44}/>
           <span className="text-5xl">DISOA</span>
          </Link>
          <Link
            href={"/#sluzby"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className="hidden md:block text-lg">Služby</span>
          </Link>
           <Link
            href={"/#vysledky"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className="hidden md:block text-lg">Naše výsledky</span>
          </Link>
           <Link
            href={"/#klienti"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className="hidden md:block text-lg">Klienti</span>
          </Link>
          <Link className={cn(
              "relative items-center hidden md:flex space-x-1"
            )} href={"/#form"}>
        <Button>ZAČÍT s námi</Button>
        </Link>
        <Sheet>
            <SheetTrigger>
                <Menu className="text-black flex size-8 md:hidden"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col space-y-5 items-center justify-center">

                <Link
            href={"/#sluzby"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className=" text-2xl">Služby</span>
          </Link>
           <Link
            href={"/#vysledky"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className=" text-2xl">Naše výsledky</span>
          </Link>
           <Link
            href={"/#klienti"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className=" text-2xl">Klienti</span>
          </Link>
          <Link className={cn(
              "relative items-center  space-x-1"
            )} href={"/#form"}>
        <Button>ZAČÍT s námi</Button>
        </Link>
            </SheetContent>
        </Sheet>
      </nav>
  );
};

export default Navbar