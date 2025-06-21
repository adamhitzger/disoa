import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sora w-full bg-white flex flex-col  items-center justify-items-center text-black min-h-screen p-8">
      <div className="flex md:w-2/3 flex-col w-full space-y-4 text-center m-auto">
<h1 className="text-4xl font-medium">Web v rekonstrukci - tvoříme něco lepšího.</h1>
      <p className="text-[17px] leading-7">
        Právě pro vás stavíme nový digitalní prostor, který bude stejně funkční a kreativní jako naše práce pro klienty.<br/>
        Jsme Disoa Marketing - marketingová agentura jež pomáhá značkám růst pomocí strategie, designu a výkonu.<br/>
        Mezitím nás můžete kontaktovat na emailu: <Link className="text-blue-800 underline underline-offset-2 decoration-1 decoration-wavy" href={"mailto:info@disoa.cz"}>info@disoa.cz</Link>, na čísle: <Link className="text-blue-800 underline underline-offset-2 decoration-1 decoration-wavy" href={"tel:+420775529613"}>+420 775 529 613</Link> nebo sledovat naší práci na sociálních sítích.<br/>
        Děkujeme za trpělivost. Brzy jsme zpět silnější než kdy dřív.
      </p>
      </div>
    </main>
  );
}
