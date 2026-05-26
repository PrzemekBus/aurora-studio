function Card({ index, icon, title, desc })  {
  return (
    <div className="flex flex-col gap-2 w-max-1/4 bg-bg-tertiary border border-accent-bg rounded-2xl p-6" id={index}>
      <div className="w-12 h-12 rounded-md bg-accent-bg flex items-center justify-center">
        <i className={`${icon} text-accent text-xl`}></i>
      </div>
      <h3 className="text-lg font-bold font-serif">{title}</h3>
      <p className="text-text-muted max-w-xs">{desc}</p>
      <a href="#" className="text-accent hover:underline w-fit"><i class="fa-solid fa-arrow-right"></i> Szczagóły</a>
    </div>
  )
}

export default Card;