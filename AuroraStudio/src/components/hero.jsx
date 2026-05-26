import Button from "./button";
import Statistics from "./statistics";

function Hero() {
  return (
    <section className=" hero-section bg-bg-tertiary flex flex-row  h-min-screen">
      <div className="hero-left mt-px flex flex-col gap-4 bg-bg-primary w-1/2 pl-16 py-16">
        <p className="hero-pill bg-accent-bg w-fit px-4 text-accent text-sm py-1 rounded-full uppercase">Nowa kolekcja 2025</p>
        <h1 className="hero-header text-4xl font-black font-serif w-full">Odkryj <span className="text-accent italic font-bold">piękno</span> w każdym detalu</h1>
        <p className="hero-description text-text-muted">Profesjonalne usługi fotograficzne i kreatywne sesje zdjęciowe dla osób i firm. Twoja historia w naszych kadrach.</p>
        <div className="hero-buttons flex flex-col gap-4">
          <Button variant="primary" size='md'>Zobacz więcej</Button>
          <Button variant="secondary" size='md'>Zobacz więcej</Button>
        </div>
        <Statistics />
      </div>

      <div className="hero-right flex items-center justify-center w-1/2">
        <div className="hero-image-container w-10/12 h-10/12 bg-bg-primary relative rounded-2xl overflow-hidden">
          <div className="hero-image-shadow absolute inset-0 z-50 bg-bg-primary opacity-20"></div>
          <img src="src/assets/cosmetics.jpg" alt="Cosmetics" className="h-full object-cover"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;