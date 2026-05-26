function Card({ index, icon, title, desc })  {
  return (
    <div className="flex flex-col gap-2 w-max-1/4 bg-bg-tertiary" id={index}>
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
        <i className={`${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p className="max-w-xs">{desc}</p>
    </div>
  )
}

export default Card;