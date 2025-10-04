"use client"
import Header from "@/components/header"
export default function Produkce(){
    return(
      <>
          <Header 
            st_header="PRODUKCE"
            text={[ 
              "Z důvodů naplnění kapacity nabízíme nyní tuto službu",
              " pouze našim dlouhodobým klientům",
            ]}
            button={false}/>
            <div className="w-full h-10"/>
            </>
    )
}