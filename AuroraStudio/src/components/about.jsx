import { CameraIcon, HeartIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Card from "./card";
import SectionHeader from "./section-header";

const headerData = {
  title: "Nasze usługi",
  description: "Wybierz pakiet dopasowany do Twoich potrzeb",
  upperdescription: "Co oferujemy"
};

const cardData = [
  { Icon: CameraIcon, title: "Sesja portretowa", desc: "Indywidualne ujęcia w studio lub plenerze. Profesjonalna obróbka i retusz zdjęć." },
  { Icon: HeartIcon, title: "Wesele & ślub", desc: "Kompletna dokumentacja Waszego wyjątkowego dnia od przygotowań po wieczorne tańce." },
  { Icon: BuildingOfficeIcon, title: "Fotografia biznesowa", desc: "Profesjonalne ujęcia dla firm i przedsiębiorców." },
];

function About() {
  return (
    <section className="flex flex-col items-center gap-4 bg-bg-secondary py-12 px-6 md:py-16">
      <SectionHeader title={headerData.title} description={headerData.description} upperdescription={headerData.upperdescription} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {cardData.map((card, index) => (
          <Card key={index} Icon={card.Icon} title={card.title} desc={card.desc} />
        ))}
      </div>
    </section>
  );
}

export default About;
