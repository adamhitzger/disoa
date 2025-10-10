"use client"

import { useMotionValue,
        useTransform,
        useInView,
        animate,
        motion,
 } from "motion/react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { StatisticsItem, StatisticsItems } from "@/types"

function Counter({text, to, endText, anotherText, className, textColor, pColor}:{text:string, to: number, endText:string, className?: string, anotherText?: string,textColor: "text-background" | "text-cp-orange", pColor?: "text-background" | "text-foreground"}){
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))
    const ref= useRef<HTMLDivElement>(null)
    const divInView = useInView(ref, {once: true})
   
    useEffect(() => {
      if(divInView){
      const controls = animate(count, [0,to], { type: "tween",duration: 5 })
      return () => controls.stop()
      }
    }, [divInView, count, to])
    return(  
    <div ref={ref} className={cn(`group/bento  flex flex-col  text-white max-h-full rounded-[2em]  p-8`, className)}>
        <div  className={`${textColor} flex flex-col  justify-center`}>
        <div className={`${textColor} flex flex-row  justify-center`}>
        <motion.span className="text-7xl font-light">{rounded}</motion.span><span className="text-7xl px-2 font-gothic font-light [word-spacing:0.2px] md:text-nowrap">{`${endText}`}</span>
        {anotherText && <><span className="hidden md:block text-center text-7xl px-2 font-gothic font-light [word-spacing:0.2px] text-nowrap">{`${anotherText}`}</span></>}
        
        </div>
        {anotherText && <><span className="md:hidden text-center text-7xl px-2 font-gothic font-light [word-spacing:0.2px] text-nowrap">{`${anotherText}`}</span></>}
        </div>
        <p className={`font-gothic mt-5 text-center leading-6 font-light text-lg ${pColor}`}>
          {text}
        </p>
      </div>
  )
}

export default function StatisticsMain(){
    return(
       <section id="statistiky" className="w-full min-h-screen flex flex-col justify-center p-4 items-center">
            <div className="max-w-4xl flex flex-col p-8 rounded-xl space-y-12">
                <h2 className="text-5xl font-light">Proč důvěřovat nám?</h2>
                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-14 sm:grid-cols-3">
                 <Counter text="měsíční dosahy na profilech klientů" to={4} endText="M" className="bg-cp-white" textColor="text-background"/>
                <Counter text="zkušeností se sociálními sítěmi" to={5} endText="let" className="bg-cp-brown"  textColor="text-background"/>
                <Counter text="úspěšně realizovaných projektů" to={25} endText="+" className="bg-cp-orange"  textColor="text-background"/>
                <Counter text="každá strategie přesně podle vašich cílů" to={100} endText="%" anotherText=" na míru" className="bg-cp-orange sm:col-span-2"  textColor="text-background"/>
                <Counter text="klientů s námi zůstanu i po zkušební době" to={98} endText="%" className="bg-cp-white"  textColor="text-background"/>

                </div>
            </div>
        </section>
    )
}

export function Statistics({heading, items, pColor}: {heading?: string, items: StatisticsItems,  pColor?: "text-background" | "text-foreground"}){
    return(
         <section id="statistiky" className={`w-full  flex flex-col justify-center p- py-16 items-center ${heading && "bg-cp-brown"}`}>
            <div className={`max-w-4xl flex flex-col  p-14 rounded-[4em] ${!heading &&"bg-background"} space-y-4`}>
               {heading &&  <h2 className="text-5xl font-light sm:mx-10 text-background ">{heading}</h2>}
                <div className="w-full grid grid-col-1 sm:grid-cols-3">
                    {items.map((s: StatisticsItem, i: number) => (
<Counter key={i} text={s.text} to={s.to} endText={s.endText}  textColor="text-cp-orange" pColor={pColor}/>
                    ))}
                 </div>
            </div>
        </section>
    )
}