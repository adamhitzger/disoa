"use client";
import React, { useEffect, useRef, useState } from "react";
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
const [open, setOpen] = useState<boolean>(false);
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
          "flex max-w-full mx-10  text-foreground fixed top-10 inset-x-0 flex-row justify-between  rounded-[1.2rem]  bg-cp-lightwhite z-[5000] p-2  items-center  ",
          className
        )}
      >
       <Link
            href={"/"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
           <Image ref={imgRef} src={"/logos/star.svg"} alt="Logo Disoa Marketing" width={34} height={34}/>
           <Image  src={"/logos/disoa_name.png"} alt="Logo Disoa Marketing" width={110} height={44}/>
          </Link>
          <div className="font-light flex md:pl-8 flex-row justify-between max-w-sm w-full">
          <Link
            href={"/#sluzby"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className="hidden md:block text-xl">Služby</span>
          </Link>
           <Link
            href={"/#vysledky"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className="hidden md:block text-xl">Naše výsledky</span>
          </Link>
           <Link
            href={"/#klienti"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
          >
            <span className="hidden md:block text-xl">Klienti</span>
          </Link>
          </div>
          <Link className={cn(
              "relative items-center hidden md:flex space-x-1"
            )} href={"/#form"}>
        <Button size={"sm"}>ZAČÍT s námi</Button>
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
            
            <SheetTrigger className="flex md:hidden">
                <Menu className="text-black size-8"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col space-y-5 items-center justify-center">

                <Link
            href={"/#sluzby"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
            onClick={() => setOpen(false)}
          >
            <span className=" text-2xl">Služby</span>
          </Link>
           <Link
            href={"/#vysledky"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
            onClick={() => setOpen(false)}
          >
            <span className=" text-2xl">Naše výsledky</span>
          </Link>
           <Link
            href={"/#klienti"}
            className={cn(
              "relative items-center flex space-x-1"
            )}
            onClick={() => setOpen(false)}
          >
            <span className=" text-2xl">Klienti</span>
          </Link>
          <Link className={cn(
              "relative items-center  space-x-1"
            )} href={"/#form"}>
        <Button onClick={() => setOpen(false)}>ZAČÍT s námi</Button>
        </Link>
            </SheetContent>
        </Sheet>
      </nav>
  );
};

export default Navbar