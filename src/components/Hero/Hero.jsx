import ArrowLeftIcon from '../../assets/icons/arrow-left-icon.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right-icon.svg';
import MoviePoster from '../../assets/images/Poster/Mechamato Poster.jpg';
// import MoviePoster from '../../assets/images/KL Gangster Poster.jpg';
import TagButton from '../Buttons/TagButton/TagButton';
import './_hero.scss';

export default function Hero() {
	return (
		<section className='hero'>
			<img src={MoviePoster} alt='Movie poster' />
			<div className='container'>
				<img
					src={ArrowLeftIcon}
					alt='Previous Movie'
					className='arrow-icon'
				/>
				<div className='hero-content'>
					<TagButton tag={'In Cinema'} />
					<div className='hero-text-content'>
						<div className='hero-title'>Mechamato</div>
						<div className='hero-description'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus earum odit libero, possimus repellat a ex cum
							vero eveniet repudiandae magnam voluptatum aliquid iste in
							ratione praesentium adipisci quisquam aliquam.
						</div>
						<div className='text-view-details'>View details</div>
					</div>
				</div>
				<img src={ArrowRightIcon} alt='Next Movie' className='arrow-icon' />
			</div>
		</section>
	);
}
