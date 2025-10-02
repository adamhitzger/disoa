"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowDownRight } from "lucide-react"

export default function Services(){

    return(
        <section id="sluzby" className="w-full  flex flex-col justify-center p-4 items-center">
            <div className=" flex flex-col bg-background p-8 rounded-xl space-y-4">
                <h2 className="text-5xl">Naše služby</h2>
                <div className="w-full flex-col gap-5 flex md:flex-row">
                    <article className="max-w-60 p-2 w-full rounded-xl bg-cp-lightwhite flex flex-col gap-5 justify-between">
                        <Image src={"/logos/star.svg"} alt="Logo Disoa marketing" className="mx-auto" width={84} height={84}/>
                        <h3 className="text-5xl">SOCIÁLNÍ<br/> SÍTĚ</h3>
                        <Link href={"/socialni-site"}>
                        <Button className="w-full flex flex-row justify-end"><ArrowDownRight className="size-14" strokeWidth={1}/></Button>
                        </Link>
                    </article>
                    <article className="max-w-60 p-2 w-full rounded-xl bg-cp-lightwhite flex flex-col gap-5 justify-between">
                        <Image src={"/logos/star.svg"} alt="Logo Disoa marketing" className="mx-auto" width={84} height={84}/>
                        <h3 className="text-5xl">PRODUKCE</h3>
                        <Link href={"/produkce"}>
                        <Button className="w-full flex flex-row justify-end"><ArrowDownRight className="size-14" strokeWidth={1}/></Button>
                        </Link>
                    </article>
                    <article className="max-w-60 p-2 w-full rounded-xl bg-cp-lightwhite flex flex-col gap-5 justify-between">
                        <Image src={"/logos/star.svg"} alt="Logo Disoa marketing" className="mx-auto" width={84} height={84}/>
                        <h3 className="text-5xl text-nowrap">META ADS</h3>
                        <Link href={"/metaads"}>
                        <Button className="w-full flex flex-row justify-end"><ArrowDownRight className="size-14" strokeWidth={1}/></Button>
                        </Link>
                    </article>
                </div>
            </div>
        </section>
    )
}