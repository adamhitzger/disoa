"use client"

import { StatisticsItems } from "@/types"
import { cn } from "@/lib/utils"

export default function Cards({items}: {items: StatisticsItems}){
    return(
         <section id="karty" className={`w-full  flex flex-col justify-center p-4 items-center`}>
            <div className="max-w-4xl flex flex-col p-8 rounded-xl space-y-4">
                <div className="w-full grid gap-5 grid-cols-3">
                    <div  className={cn(`group/bento text-white flex flex-col justify-between  max-h-full rounded-[25px] bg-cp-white p-8 transition duration-200 hover:shadow-xl`)}>
        <div className={`w-full flex flex-col justify-between`}>
            <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="40" height="40"
  viewBox="0 0 30 30" 
  preserveAspectRatio="xMidYMid meet"
  version="1.0">


  <g>
    <path fill="#ff7d1d" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
  </g>
</svg>
<span className="text-3xl  font-gothic font-light [word-spacing:0.2px] md:text-nowrap">{`${items[0].text}`}</span>
        </div>
        <p className={`font-gothic text-sm font-light `}>
          {items[0].endText}
        </p>
      </div>

       <div  className={cn(`group/bento text-white flex flex-col justify-between  max-h-full rounded-[25px] bg-cp-brown p-8 transition duration-200 hover:shadow-xl`)}>
        <div className={`w-full flex flex-col justify-between`}>
            <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="40" height="40"
  viewBox="0 0 30 30" 
  preserveAspectRatio="xMidYMid meet"
  version="1.0">


  <g>
    <path fill="#d4d1c9" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
  </g>
</svg>
<span className="text-3xl  font-gothic font-light [word-spacing:0.2px] md:text-nowrap">{`${items[1].text}`}</span>
        </div>
        <p className={`font-gothic text-sm font-light `}>
          {items[1].endText}
        </p>
      </div>

       <div  className={cn(`group/bento text-white flex flex-col justify-between  max-h-full rounded-[25px] bg-cp-orange p-8 transition duration-200 hover:shadow-xl`)}>
        <div className={`w-full flex flex-col justify-between`}>
            <svg 
  xmlns="http://www.w3.org/2000/svg"
  width="40" height="40"
  viewBox="0 0 30 30" 
  preserveAspectRatio="xMidYMid meet"
  version="1.0">


  <g>
    <path fill="#655948" d="M 18.167969 1.460938 L 21.996094 3.046875 L 18.824219 10.691406 L 26.476562 7.523438 L 28.0625 11.347656 L 20.410156 14.515625 L 28.0625 17.683594 L 26.476562 21.503906 L 18.824219 18.335938 L 21.996094 25.984375 L 18.167969 27.566406 L 14.996094 19.921875 L 11.828125 27.566406 L 8 25.984375 L 11.171875 18.335938 L 3.519531 21.503906 L 1.933594 17.683594 L 9.585938 14.515625 L 1.933594 11.347656 L 3.519531 7.523438 L 11.171875 10.691406 L 8 3.046875 L 11.828125 1.460938 L 14.996094 9.109375 Z"/>
  </g>
</svg>
<span className="text-3xl  font-gothic font-light [word-spacing:0.2px] md:text-nowrap">{`${items[2].text}`}</span>
        </div>
        <p className={`font-gothic text-sm font-light `}>
          {items[2].endText}
        </p>
      </div>
                 </div>
            </div>
        </section>
    )
}