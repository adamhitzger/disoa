"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowDownRight } from "lucide-react"

export default function Services(){

    return(
        <section id="sluzby" className="w-full  flex flex-col justify-center p-8 md:p-10   items-center">
            <div className=" flex flex-col bg-background p-4 md:p-20 rounded-[3em]  space-y-4">
                <h2 className="text-5xl mb-7 font-light tracking-wide">Naše služby</h2>
                <div className="w-full flex-col gap-5 flex md:flex-row">
                    <article className="min-w-[16rem] p-6 w-full h-fit rounded-[2em] bg-cp-lightwhite flex flex-col gap-10 justify-between">
                        <Image src={"/logos/star.svg"} alt="Logo Disoa marketing" className="mx-auto mt-5" width={84} height={84}/>
                        <h3 className="text-4xl">SOCIÁLNÍ<br/> SÍTĚ</h3>
                        <Link href={"/socialni-site"} >
                        <Button className="w-full flex flex-row justify-end"><ArrowDownRight className="size-16" strokeWidth={1}/></Button>
                        </Link>
                    </article>
                    <article className="min-w-[16rem] p-6 w-full rounded-[2em] bg-cp-lightwhite flex flex-col gap-10 justify-between">
                        <Image src={"/logos/star.svg"} alt="Logo Disoa marketing" className="mx-auto mt-5" width={84} height={84}/>
                        <h3 className="text-4xl">PRODUKCE</h3>
                        <Link href={"/produkce"}>
                        <Button className="w-full flex flex-row justify-end"><ArrowDownRight className="size-16" strokeWidth={1}/></Button>
                        </Link>
                    </article>
                    <article className="min-w-[16rem] p-6 w-full rounded-[2em] bg-cp-lightwhite flex flex-col gap-10 justify-between">
                        <Image src={"/logos/star.svg"} alt="Logo Disoa marketing" className="mx-auto mt-5" width={84} height={84}/>
                        <h3 className="text-4xl text-nowrap">META ADS</h3>
                        <Link href={"/metaads"}>
                        <Button className="w-full flex flex-row justify-end"><ArrowDownRight className="size-16" strokeWidth={1}/></Button>
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}