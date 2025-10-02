"use client"
import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <footer className="w-full flex flex-col sm:flex-row p-8 bg-cp-brown gap-5">
            <div className="w-full sm:w-1/2 flex flex-col space-y-4" >
                <div className="flex flex-row space-x-4">
                     <Link
            href={"/"}
            className={
              "relative items-center flex space-x-1"
            }
          >
           <Image src={"/logos/star.svg"} alt="Logo Disoa Marketing" width={44} height={44}/>
           <span className="text-5xl text-background">DISOA</span>
          </Link>
          
                </div>
                <p className="text-background text-sm font-light">
            DISOA je kreativní agentura, která pomáhá značkám růst na sociálních sítích. Od strategie přes tvorbu obsahu až po výsledky
          </p>
          <div className="flex text-3xl text-cp-orange font-medium flex-row space-x-4">
            <Link href="https://www.facebook.com/p/DISOA-Marketing-100089734110776/">IG</Link>
            <Link href="https://www.facebook.com/p/DISOA-Marketing-100089734110776/">FB</Link>
          </div>
            </div>
             <div className="w-full text-background sm:w-1/2 flex flex-col " >
                <h2 className="text-3xl mb-5">Kontakt</h2>
                <Link href={"tel:+420775529613"}>Tel. číslo: 775 529 613</Link>
                <Link href={"mailto:jakub.dolezal@disoa.cz"}>E-mail: jakub.dolezal@disoa.cz</Link>
                <span className="mt-5">IČO: 21349533</span>
                <span >DIČ: CZ21349533</span>
                <Link className="font-light my-2" href={"/zasady-zpracovani-udaju"} >Zásady zpracování osobních údajů</Link>
             </div>
        </footer>
    )
}