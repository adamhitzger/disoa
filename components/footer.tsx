"use client"
import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <footer className="w-full flex flex-col sm:flex-row py-8 px-32 bg-cp-brown gap-5">
            <div className="w-full sm:w-1/2 flex justify-center  py-16 flex-col space-y-4" >
                <div className="flex flex-row space-x-4">
                     <Link
            href={"/"}
            className={
              "relative items-center flex space-x-5"
            }
          >
           <Image src={"/logos/star.svg"} alt="Logo Disoa Marketing" width={64} height={64}/>
          <Image className="invert" src={"/logos/disoa_name.png"} alt="Logo Disoa Marketing" width={170} height={54}/>
          </Link>
          
                </div>
                <p className="text-background text-sm font-light max-w-96">
            DISOA je kreativní agentura, která pomáhá značkám růst na sociálních sítích - od strategie přes tvorbu obsahu až po výsledky
          </p>
          <div className="flex text-3xl text-cp-orange  flex-row font-light space-x-4">
            <Link href="https://www.facebook.com/p/DISOA-Marketing-100089734110776/">IG</Link>
            <Link href="https://www.facebook.com/p/DISOA-Marketing-100089734110776/">FB</Link>
          </div>
            </div>
             <div className="w-full text-base text-background sm:w-1/2 flex flex-col justify-center sm:items-end font-light" >
                <h2 className="text-2xl mb-5">Firemní údaje</h2>
                <Link href={"tel:+420775529613"}>775 529 613</Link>
                <Link href={"mailto:jakub.dolezal@disoa.cz"}>jakub.dolezal@disoa.cz</Link>
                <span className="mt-5">IČO: 21349533</span>
                <Link className="font-light my-5" href={"/zasady-zpracovani-udaju"} >Zásady zpracování osobních údajů</Link>
             </div>
        </footer>
    )
}