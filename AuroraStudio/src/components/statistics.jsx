const stats = [
  { value: "340+", label: "Zadowolonych klientów" },
  { value: "8 lat", label: "Doświadczenia" },
  { value: "98%",  label: "Polecanych" },
];

function HeroStatistics() {
  return (
    <div className="flex flex-row gap-2">
      {stats.map((stat, index) => (
        <div className="w-1/3" key={index}>
          <p className="text-3xl text-accent font-serif">{stat.value}</p>
          <p className="text-sm font-extralight text-text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroStatistics;