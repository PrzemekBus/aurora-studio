import Button from "./button";
import Statistics from "./hero-statistics";

function Hero() {
  return (
    <section className=" hero-section bg-bg-tertiary columns-2">
      <div className="hero-left my-px flex flex-col gap-4 bg-bg-primary h-screen">
        <p className="hero-pill bg-accent-bg w-fit px-4 text-accent text-sm py-1 rounded-full uppercase">Nowa kolekcja 2025</p>
        <h1 className="hero-header text-4xl font-black font-serif">Odkryj <span className="text-accent italic font-bold">piękno</span> w każdym detalu</h1>
        <p className="hero-description text-text-muted">Profesjonalne usługi fotograficzne i kreatywne sesje zdjęciowe dla osób i firm. Twoja historia w naszych kadrach.</p>
        <div className="hero-buttons">
          <Button variant="primary">Zobacz więcej</Button>
          <Button variant="secondary">Zobacz więcej</Button>
        </div>
        <Statistics />
      </div>

      <div className="hero-right">
        <img src="src/assets/cosmetics.jpg" alt="Cosmetics" />
      </div>
    </section>
  );
}

export default Hero;