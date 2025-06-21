import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sora w-full bg-white flex flex-col  items-center text-black min-h-screen p-8">
      <div className="flex md:w-6/7 flex-col w-full space-y-4 text-center m-auto">
<h1 className="text-4xl font-medium">Web v rekonstrukci - tvoříme něco lepšího.</h1>
      <p className="text-gray-500 text-[17px] leading-7">
        Právě pro vás stavíme nový digitalní prostor, který bude stejně funkční a kreativní jako naše práce pro klienty.<br/>
        Jsme Disoa Marketing - marketingová agentura jež pomáhá značkám růst pomocí strategie, designu a výkonu.<br/>
        Mezitím nás můžete kontaktovat na emailu: <Link className="text-blue-800 underline underline-offset-2 decoration-1 decoration-wavy" href={"mailto:info@disoa.cz"}>info@disoa.cz</Link> nebo sledovat naší práci na sociálních sítích.<br/>
        Děkujeme za trpělivost. Brzy jsme zpět silnější než kdy dřív.
      </p>
      <div className="w-fit mx-auto flex gap-5 flex-row justify-between">
        <Link href={"mailto:info@disoa.cz"} className="w-fit flex flex-row gap-3">
            <Mail className="w-6 h-6" /> info@disoa.cz
        </Link>
        <Link href={"tel:+420775529613"} className="w-fit flex flex-row gap-3">
            <Phone className="w-6 h-6" />  +420 775 529 613
        </Link>
      </div>
      </div>
      
    </main>
  );
}
