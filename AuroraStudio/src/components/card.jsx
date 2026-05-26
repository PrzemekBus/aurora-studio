import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Card({ Icon, title, desc }) {
  return (
    <div className="flex flex-col gap-2 w-full bg-bg-tertiary border border-accent-bg rounded-2xl p-6">
      <div className="w-12 h-12 rounded-md bg-accent-bg flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-lg font-bold font-serif">{title}</h3>
      <p className="text-text-muted max-w-xs">{desc}</p>
      <a href="#" className="text-accent hover:underline w-fit flex items-center gap-1">
        <ArrowRightIcon className="w-4 h-4" /> Szczegóły
      </a>
    </div>
  );
}

export default Card;
