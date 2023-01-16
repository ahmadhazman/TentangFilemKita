import MovieCardMain from '../Cards/MovieCardMain/MovieCardMain';
import './_slider.scss';

export default function Slider() {
	return (
		<div className='slider-container'>
			<div className='horizontal-slider'>
				<MovieCardMain />
				<MovieCardMain />
				<MovieCardMain />
				<MovieCardMain />
				<MovieCardMain />
				<MovieCardMain />
				<MovieCardMain />
				<MovieCardMain />
			</div>
		</div>
		// <></>
	);
}
