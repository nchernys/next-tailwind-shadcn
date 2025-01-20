"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const menuItems = [
  {
    trigger: "Consectetur ",
    options: ["Lorem Ipsum", "Dolor", "Set Amet"],
  },
  {
    trigger: "Adipiscing",
    options: ["Elit", "Eiusmod", "Tempor", "Magna"],
  },

  {
    trigger: "Ullamco",
    options: ["Aliquip ", "Commodo", "Consequat"],
  },
];

const selectPlans = [
  {
    title: "Emet Tier",
    description:
      "Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker",
    monthlyCost: "$ 150 / month",
    annualCost: "$ 95 / month",
  },
  {
    title: "Ipsum Tier",
    description:
      "Det finns många olika varianter av Lorem Ipsum, men majoriteten av dessa har ändrats på någotvis. Antingen med inslag av humor, eller med inlägg av ord som knappast ser trovärdiga ut.",
    monthlyCost: "$ 200 / month",
    annualCost: "$ 155 / month",
  },

  {
    title: "Dolore Tier",
    description:
      "Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.",
    monthlyCost: "$ 250 / month",
    annualCost: "$ 210 / month",
  },
];

const testimonialsCards = [
  {
    photo: "/images/person1.jpg",
    name: "Sven K.",
    testimonial:
      "On todistettu, että lukijaa häiritsee sivun ulkoasu lukiessaan sivua. Lorem Ipsumin käytön tarkoitus on, että se omaa enemmän-tai-vähemmän normaalimpaa sanojen sijoitusta kuin 'Sisältöä tähän, sisältöä tähän'. Monet tietokoneen julkistusohjelmien pakkaukset ja nettisivueditorit käyttävät nyt Lorem Ipsumia heidän normaalina mallitekstinä.",
    rating: 98,
  },
  {
    photo: "/images/person2.jpg",
    name: "Janna D.",
    testimonial:
      "On olemassa monta eri versiota Lorem Ipsumin kappaleista, mutta suurin osa on kärsinyt muunnoksista joissain muodoissa, kuten huumorin tai sattumanvaraisesti asetetuin sanoin jotka eivät näytä edes vähän uskottavalta. Jos sinä aiot käyttää kappaletta Lorem Ipsumista, sinun pitää tarkistaa, ettei tekstin seassa ole mitään nolostuttavaa.",
    rating: 90,
  },

  {
    photo: "/images/person3.jpg",
    name: "Tom A.",
    testimonial:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    rating: 65,
  },

  {
    photo: "/images/person4.jpg",
    name: "Marianna N.",
    testimonial:
      "Navzdory všeobecnému přesvědčení Lorem Ipsum není náhodný text. Jeho původ má kořeny v klasické latinské literatuře z roku 45 před Kristem, což znamená, že je více jak 2000 let staré. Richard McClintock, profesor latiny na univerzitě Hampden-Sydney stát Virginia, který se zabýval téměř neznámými latinskými slovy.",
    rating: 100,
  },
  {
    photo: "/images/person5.jpg",
    name: "Andrew B.",
    testimonial:
      "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute.",
    rating: 90,
  },
  {
    photo: "/images/person7.jpg",
    name: "Lina Z.",
    testimonial:
      "Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum..",
    rating: 100,
  },
];

const aboutUs = [
  {
    title: "Dažreiz tās radušās kļūdu",
    description:
      "Jau sen ir noskaidrots fakts, ka aplūkojot maketa dizainu un kompozīciju teksta saturs novērš uzmanību. Lorem Ipsum izmanto tāpēc, kas tas nodrošina vairāk vai mazāk vienmērīgu burtu izvietojumu un padara to līdzīgu lasāmam tekstam angļu valodā, kas neizdodas, ja vienu un to pašu tekstu 'Šeit ir teksts, šeit ir teksts' atkārto. Daudzas maketēšanas un web lapu rediģēšanas programmas mūsdienās izmanto Lorem Ipsum kā standarta parauga tekstu un, izmantojot interneta meklēšanas programmās atslēgas vārdus 'lorem ipsum', var redzēt cik daudz web lapu aizvien vēl gaida savu piedzimšanu.",
    image: "/images/img1.webp",
  },
  {
    title: "Ismeretlenebb latin szavak",
    description:
      "Gyökerei egy Kr. E. 45-ös latin irodalmi klasszikushoz nyúlnak. Richarrd McClintock a virginiai Hampden-Sydney egyetem professzora kikereste az ismeretlenebb latin szavak közül az egyiket (consectetur) egy Lorem Ipsum részletbõl, és a klasszikus irodalmat átkutatva vitathatatlan forrást talált.",
    image: "/images/img4.webp",
  },
  {
    title: "Har gennemgået forandringer",
    description:
      "Alle Lorem Ipsum-generatore på nettet har en tendens til kun at dublere små brudstykker af Lorem Ipsum efter behov, hvilket gør dette til den første ægte generator på internettet. Den bruger en ordbog på over 200 ord på latin kombineret med en håndfuld sætningsstrukturer til at generere sætninger, som ser pålidelige ud. Resultatet af Lorem Ipsum er derfor altid fri for gentagelser, tilføjet humor eller utroværdige ord osv.",
    image: "/images/img8.webp",
  },
];

const QAs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate?",
    answer:
      "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    question: "Sunt in culpa qui officia deserunt mollit anim id est laborum?",
    answer:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
  },
];
export default function Home() {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean[]>(
    Array(menuItems.length).fill(false)
  );

  const handleSwitchChange = (checked: boolean) => {
    setIsSwitchOn(checked);
    console.log(isSwitchOn);
    console.log(checked);
  };

  const handleOpenMenu = (index: number): void => {
    setIsOpen((prev) => prev.map((open, i) => (i === index ? !open : false)));
  };

  return (
    <>
      <div className="w-full h-auto relative bg-gradient-to-r from-blue-500 to-custom-bg  box-border">
        <img
          className="absolute opacity-20 -z-5 w-full h-full pointer-events-auto"
          src="/images/deco-1.svg"
          alt="background-decoration"
        />
        <nav className="w-full px-8 py-2 flex justify-between items-center box-border relative">
          <div className="w-3/12">
            <img className="w-10" src="/images/logo.svg" alt="Logo" />
          </div>
          <div className="w-6/12 justify-evenly hidden  md:flex">
            {menuItems.map((item, i) => (
              <div className="relative">
                <div
                  className="text-white cursor-pointer"
                  onClick={() => handleOpenMenu(i)}
                >
                  {item.trigger}
                </div>
                <div
                  className={clsx(
                    "w-40 absolute bg-white rounded-lg shadow-md overflow-hidden top-8 left-0 z-10",
                    isOpen[i] ? "block" : "hidden"
                  )}
                >
                  {item.options.map((option, index) => (
                    <>
                      <div className="text-blue-500 hover:bg-blue-400 hover:text-white text-sm py-4 px-4 cursor-pointer">
                        {option}
                      </div>
                      {index < item.options.length - 1 && <Separator />}
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-3/12 text-white hidden md:flex justify-end ">
            <span>+ 1 (212) 123-4567</span>
            <img
              className="w-6 text-white ms-5"
              src="/images/emailIcon.svg"
              alt="Email"
            />
          </div>
          <div className="w-1/12 flex md:hidden">
            <img className="w-12" src="/images/mobileMenuIcon.svg" alt="" />
          </div>
        </nav>
        <section className="w-full pt-2 pb-8 px-8 grid grid-cols-1 md:grid-cols-2 place-items-center relative">
          <div className="w-full text-white order-2 md:order-1">
            <h1
              className="leading-none text-opacity-90 font-semibold md:leading-snug"
              style={{ fontSize: "calc(2.5rem + 3vw)" }}
            >
              Lorem Ipsum Dolor Set Amet
            </h1>
            <h3
              className="mt-8 text-opacity-90 "
              style={{ fontSize: "calc(.9rem + .4vw)" }}
            >
              Ez egy régóta elfogadott tény, miszerint egy olvasót zavarja az
              olvasható szöveg miközben a szöveg elrendezését nézi
            </h3>
            <div className="mt-12 flex gap-5">
              <Button
                variant="ghost"
                className="bg-slate-800 h-12 w-32 text-lg"
              >
                Amet
              </Button>
              <Button
                variant="ghost"
                className="text-slate-800 bg-white h-12 w-32 text-lg"
              >
                Nirit
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center order-1 md:order-2">
            <Image
              src="/images/hero-img.png"
              alt="Hero image"
              width={500}
              height={500}
              className="w-auto h-auto"
              priority
            />
          </div>
        </section>
      </div>
      <section className="w-full relative">
        {aboutUs.map((about, index) => (
          <section className="w-full py-10 md:py-20 px-0 sm:p-16 md:px-3 lg:px-4 h-auto grid grid-cols-1 md:grid-cols-2 lg:gap-2 place-items-center relative">
            <img
              className="absolute opacity-10 -z-5 w-full h-80 top-44 pointer-events-auto"
              src="/images/deco-3.svg"
              alt="background-decoration"
            />
            <div
              className={clsx(
                "w-full text-slate-800 p-6 lg:p-10",
                index === 1 ? "order-2 md:order-1" : "order-2 md:order-2"
              )}
            >
              <h2 className="text-3xl font-semibold mb-8 lg:text-4xl">
                {about.title}
              </h2>
              <p className="leading:tight lg:leading-7 xl:leading-8">
                {about.description}
              </p>
            </div>
            <div
              className={clsx(
                "w-full flex justify-center",
                index === 1 ? " order-1 md:order-2" : " order-1 md:order-1"
              )}
            >
              <img
                className="w-[95%] lg:w-10/12 -ms-[0%]"
                src={about.image}
                alt="about-us-photo"
              />
            </div>
          </section>
        ))}
      </section>
      <section className="w-full py-20 px-3 sm:px-8 md:px-16 text-slate-800">
        <h1 className="w-full text-5xl font-bold pb-16 text-center">
          Choose a Plan
        </h1>
        <div className="w-full text-center flex flex-col items-center gap-5 2xs:flex-row 2xs:justify-center pb-24 ">
          <span
            className={clsx(
              "text-2xl mx-8",
              !isSwitchOn ? "text-slate-800" : "text-slate-300"
            )}
          >
            Monthly
          </span>{" "}
          <Switch
            className="scale-150"
            checked={isSwitchOn}
            onCheckedChange={handleSwitchChange}
          />
          <span
            className={clsx(
              "text-2xl mx-8",
              isSwitchOn ? "text-slate-800" : "text-slate-300"
            )}
          >
            Annually
          </span>
        </div>

        <div className="grid grid-cols-1 place-items-center gap-12 lg:grid-cols-3 lg:gap-0 lg:place-items-start">
          {selectPlans.map((plan, index) => (
            <Card
              key={index}
              className={clsx(
                "w-12/12 sm:w-10/12 h-full text-white flex flex-col justify-center md:justify-between md:p-3",
                index === 1
                  ? "bg-slate-800 md:scale-105 md:shadow-2xl"
                  : "bg-blue-500"
              )}
            >
              <div>
                <CardHeader className="mb-5">
                  <CardTitle className="text-4xl mb-12">{plan.title}</CardTitle>
                  <CardDescription className="text-white text-opacity-90 text-lg">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
              </div>
              <div>
                <CardContent className="text-3xl font-bold mb-8">
                  <p>{isSwitchOn ? plan.annualCost : plan.monthlyCost}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className={clsx(
                      "text-slate-800 bg-white h-12 w-32 text-lg",
                      index === 1
                        ? "hover:bg-blue-500 hover:text-white"
                        : "hover:bg-slate-800 hover:text-white"
                    )}
                  >
                    Select
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-32 text-slate-800">
        <h1 className="w-full text-5xl font-bold pb-32  text-center relative">
          <img
            className="absolute opacity-10 -z-10 w-full h-80 -top-24"
            src="/images/deco-3.svg"
            alt="background-decoration"
          />
          <span>Testimonials</span>
        </h1>

        <div className="w-full overflow-auto scrollbar-hide flex flex-col md:flex-row gap-12 pb-12 px-4">
          {testimonialsCards.map((card, index) => (
            <Card
              key={index}
              className="w-12/12 md:w-[20rem] md:flex-shrink-0 shadow-2xl  flex flex-col justify-center sm:justify-between md:p-2"
            >
              <CardHeader className="mb-5">
                <CardTitle className="mb-8">
                  <div className="flex justify-between items-end">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={card.photo} className="object-cover" />
                      <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="w-[7.5rem] h-[1.5rem] relative">
                        <div
                          className="bg-yellow-500 h-[1.5rem] absolute z-0"
                          style={{ width: `${card.rating}%` }}
                        ></div>
                        <div className="absolute z-10 flex overflow-hidden">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <img
                              className="w-[1.5rem] h-[1.5rem] relative"
                              src="/images/starIcon.svg"
                              alt=""
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardTitle>
                <CardDescription className="text-base">
                  {card.testimonial}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-lg font-bold mb-2 py-0">
                <p>{card.name}</p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="w-full px-2 md:px-12 text-center relative grid grid-cols-1 md:grid-cols-[50%_50%] place-items-start">
        <img
          className="absolute -z-10 opacity-10 w-full h-96 left-0 -top-40"
          src="/images/deco-3.svg"
          alt="background-decoration"
        />
        <h1 className="w-full text-5xl font-bold text-center md:text-left md:py-28">
          Have Questions?
        </h1>
        <section className="w-full py-16 px-2">
          {QAs.map((set) => (
            <Accordion
              type="single"
              className="w-full mx-auto bg-wtite"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl text-left hover:no-underline hover:text-blue-500 text-slate-800 relative bg-white ">
                  <span className="absolute -left-10">
                    <img
                      className="me-4 w-4 "
                      src="/images/listPoint-2.svg"
                      alt=""
                    />
                  </span>{" "}
                  <span> {set.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-left ps-4">
                  {set.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </section>
      </section>
      <section className="w-full py-16"></section>
    </>
  );
}
