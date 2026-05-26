import { CameraIcon, HeartIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Card from "./card";

const cardData = [
  { Icon: CameraIcon, title: "Sesja portretowa", desc: "Indywidualne ujęcia w studio lub plenerze. Profesjonalna obróbka i retusz zdjęć." },
  { Icon: HeartIcon, title: "Wesele & ślub", desc: "Kompletna dokumentacja Waszego wyjątkowego dnia od przygotowań po wieczorne tańce." },
  { Icon: BuildingOfficeIcon, title: "Fotografia biznesowa", desc: "Profesjonalne ujęcia dla firm i przedsiębiorców." },
];

function About() {
  return (
    <section className="flex flex-col items-center gap-4 bg-bg-primary py-12 px-6 md:py-16">
      <p className="uppercase text-accent text-[0.875rem]">Co oferujemy</p>
      <h2 className="text-3xl font-serif font-bold">Nasze usługi</h2>
      <p className="text-text-muted">Wybierz pakiet dopasowany do Twoich potrzeb</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {cardData.map((card, index) => (
          <Card key={index} Icon={card.Icon} title={card.title} desc={card.desc} />
        ))}
      </div>
    </section>
  );
}

export default About;
