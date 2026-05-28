function sectionHeader({ title, description, upperdescription }) {
  return ( 
    <div className="section-header flex flex-col items-center gap-5 text-center">
      <p className="uppercase text-accent text-[0.875rem]">{upperdescription}</p>
      <h2 className="text-3xl font-serif font-bold">{title}</h2>
      <p className="text-text-muted">{description}</p>
    </div>
  );
}

export default sectionHeader;