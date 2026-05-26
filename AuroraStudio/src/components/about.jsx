import Card from "./card";


const cardData = [
  { icon: "fa-solid fa-camera", title: "Sesja portretowa", desc: "Indywidualne ujęcia w studio lub plenerze. Profesjonalna obróbka i retusz zdjęć." },
  { icon: "fa-regular fa-heart", title: "Wesele & ślub", desc: "Kompletna dokumentacja Waszego wyjątkowego dnia od przygotowań po wieczorne tańce." },
  { icon: "fa-regular fa-building", title: "Fotografia biznesowa", desc: "Profesjonalne ujęcia dla firm i przedsiębiorców." },
];

function About() {
  return (
    <section className="flex flex-col justify-items-center items-center gap-4 bg-bg-primary py-8">
      <p className="uppercase text-accent text-[0.875rem]">Co oferujemy</p>
      <h2 className="text-3xl font-serif font-bold">Nasze usługi</h2>
      <p className="text-text-muted">Wybierz pakiet dopasowany do Twoich potrzeb</p>
      <div className="card-container flex flex-wrap gap-4">
        {cardData.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} desc={card.desc} />
        ))}
      </div>
    </section>
  )
}

export default About;
