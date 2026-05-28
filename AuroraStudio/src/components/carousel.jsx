import Button from "./button"

function Carousel({ renderItem, items }) {
	return (
		<div className='carousel container mx-auto flex flex-col items-center'>
			
      <div className='track w-full overflow-hidden'>
				<div className='carousel-wrapper flex items-stretch'>
					{items.map(item => renderItem(item))}
				</div>
			</div>

			<div className='carousel-buttons'>
				<Button> </Button>
				<Button> </Button>
			</div>

			<div className='carosel-indicators'>
				<span className='dot active'></span>
				<span className='dot'></span>
				<span className='dot'></span>
			</div>
		</div>
	)
}

export default Carousel
