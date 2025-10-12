"use client"
import { ActionRes } from "@/types"
import { ContactType } from "@/lib/schema"
import { useActionState, useEffect } from "react"
import {toast} from "react-hot-toast"
import { sendContact } from "@/lib/action"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { ArrowDownRight } from "lucide-react"
import Link from "next/link"

const actionState: ActionRes<ContactType> = {
    success: false,
    message: "",
    submitted: false,
}

export default function Contact(){
    const [state, action, isPending] = useActionState(sendContact, actionState);
    useEffect(() => {
        if (!state.success && state.message) {
            toast.error(state.message);
        }else if(state.success && state.message){
            toast.success(state.message);
            
        }
    }, [state.success, state.message]);  
    return(
        <section id="kontakt"className=" w-full min-h-screen items-center justify-center flex flex-col p-8 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url("+"/background.png"+")"}}>
             <div className="max-w-7xl flex flex-col md:flex-row gap-8">

        
            <div className=" flex flex-col space-y-4 w-full md:w-1/2">
                <h1 className="text-6xl uppercase font-light ">Začněte dnes!</h1>
                <p className="text-xl max-w-[35rem] font-light">
                  Chcete své podnikání rozjet a posunout na další úroveň? 
                  Napište nám pár řádků a společně promyšlenou strategii 
                  pro sociální sítě - od tvorby přes reklamy až po každodenní 
                  správu. Postaráme se o to, aby Vaše značka byla vidět a 
                  přitahovala nové zákazníky.  
                </p>
            </div>

            <form action={action} id="form" className="w-full flex flex-col space-y-4 md:w-1/2">
                <div className='flex flex-col w-full space-y-2'>
                    <Input name="name" type="text" placeholder={"* Jméno a přijmení"} required disabled={isPending} />
                    {state?.errors?.name && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.name}
                               </p>
                            )}
                </div>
                  <div className='flex flex-col space-y-2 w-full'>
                    <Input name="email" type="email" placeholder={"* E-mail"}  required disabled={isPending} />
                    {state?.errors?.email && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.email}
                               </p>
                            )}
                </div>
                <div className='flex flex-col space-y-2 w-full'>
                    <Input name="company" type="text" placeholder={"Název firmy"} disabled={isPending} />
                    {state?.errors?.company && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.company}
                               </p>
                            )}
                </div>
                             <div className='flex flex-col space-y-2 w-full'>
                    
                    <Input name="tel" type='tel' placeholder={"Telefon"} required disabled={isPending} />
                    {state?.errors?.tel && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.tel}
                               </p>
                            )}
                </div>
                <div className='flex flex-col space-y-2 lg:col-span-2 w-full'>
                    <Textarea name='msg' placeholder={"Zanechte nám zprávu ..."} required disabled={isPending} />
                    {state?.errors?.msg && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.msg}
                               </p>
                            )}
                </div>
                <div className="w-full flex gap-2 items-start flex-row justify-between">
                    <Link href="/zasady-zpracovani-udaju" className=" text-[0.7em]">Odesláním souhlasíte se <br/><span className="">zpracováním osobních údajů</span>.</Link>
                    <Button type="submit" size={"sm"} className="w-32  flex flex-row justify-end"><ArrowDownRight className="size-12" strokeWidth={1}/> </Button>
                </div>
            </form>
                 </div>
        </section>
    )
}