import Card from "./card";
const cardData = [
  { icon:'foto', title: "Sesja portretowa", desc: "Indywidualne ujęcia w studio lub plenerze. Profesjonalna obróbka i retusz zdjęć." },
  { icon:'heart', title: "Wesele & ślub", desc: "Kompletna dokumentacja Waszego wyjątkowego dnia od przygotowań po wieczorne tańce." },
  { icon:'busines', title: "Fotografia biznesowa", desc: "Profesjonalne ujęcia dla firm i przedsiębiorców." },
];

function About() {
  return (
    <section>
      <p>Co oferujemy</p>
      <h2>Nasze usługi</h2>
      <p>Wybierz pakiet dopasowany do Twoich potrzeb</p>
      {cardData.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} desc={card.desc} />
      ))}
    </section>
  )
}

export default About;
