const getInitials = (name) =>
  name
    .split(" ")
    .filter(word => /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(word[0]))
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join("");

function CommentCard({ id, name, comment, rating, product }) {
	return (
		<div
			className='comment-card  w-1/3 shrink-0 px-2'
			id={id}>
			<div className=' flex flex-col justify-between py-4 bg-bg-tertiary border border-accent-bg rounded-lg shadow-md px-6 h-full'>
				<div className='flex items-center gap-0.5 mt-2'>
					{[...Array(5)].map((_, index) => (
						<svg
							key={index}
							xmlns='http://www.w3.org/2000/svg'
							fill={index < rating ? "#fbbf24" : "#e5e7eb"}
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='#fbbf24'
							className='w-4 h-4'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.218 3.867a.563.563 0 00-.162.556l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.487a.563.563 0 00-.523 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.162-.556L3.25 9.386c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L10.44 3.5z'
							/>
						</svg>
					))}
				</div>

				<p className='text-sm text-text-muted my-6'>"{comment}"</p>

				<div className='line-trough border-b border-accent-bg my-4'></div>

				<div className="card-footer flex items-center gap-4">
          <p className={`left-col w-10 h-10 rounded-full bg-accent-bg flex items-center justify-center text-sm text-text-white font-bold
          ${id % 2 === 0 
          ? 'bg-accent2/20 text-accent2' 
          : 'bg-accent/20 text-accent'
          }`}>
            {getInitials(name)}
          </p>
          <div className="right-col">
            <p className="text-sm text-text-white font-medium">{name}</p>
            <p className="text-sm text-text-muted">{product}</p>
          </div>
        </div>
			</div>
		</div>
	)
}

export default CommentCard
