import Button from "./button";
import Statistics from "./statistics";
import cosmetics from "../assets/cosmetics.jpg";

function Hero() {
  return (
    <section className="hero-section bg-bg-tertiary flex flex-col lg:flex-row">
      <div className="hero-left flex flex-col gap-8 bg-bg-primary w-full lg:w-1/2 px-6 py-16 md:px-12 md:py-24 lg:pl-16 lg:py-48">
        <p className="hero-pill bg-accent-bg w-fit px-4 text-accent text-sm py-1 rounded-full uppercase">Nowa kolekcja 2025</p>
        <h1 className="hero-header text-4xl md:text-5xl font-black font-serif max-w-sm">
          Odkryj <span className="text-accent italic font-bold">piękno</span> w każdym detalu
        </h1>
        <p className="hero-description text-text-muted max-w-md">
          Profesjonalne usługi fotograficzne i kreatywne sesje zdjęciowe dla osób i firm. Twoja historia w naszych kadrach.
        </p>
        <div className="hero-buttons flex flex-row gap-4 sm:flex-row lg:flex-col xl:flex-row">
          <Button variant="primary" size="md">Zobacz więcej</Button>
          <Button variant="secondary" size="md">Umówmy się</Button>
        </div>
        <Statistics />
      </div>

      <div className="hero-right flex items-center justify-center w-full lg:w-1/2 py-12 lg:py-0 bg-bg-tertiary">
        <div className="hero-image-container w-10/12 md:w-8/12 lg:w-9/12 aspect-4/5 bg-bg-primary relative rounded-2xl overflow-hidden">
          <div className="hero-image-shadow absolute inset-0 z-50 bg-bg-primary opacity-30"></div>
          <img src={cosmetics} alt="Sesja zdjęciowa kosmetyki" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
