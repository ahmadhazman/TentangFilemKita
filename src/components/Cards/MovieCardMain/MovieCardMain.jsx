import { useState } from 'react';
import MoviePoster from '../../../assets/images/Poster/Mechamato Poster.jpg';
// import MoviePoster from '../../../assets/images/KL Gangster Poster.jpg';
import './_moviecardmain.scss';

export default function MovieCardMain() {
	const [isMobile, setisMobile] = useState('true');
	return (
		<div className='movie-card-main'>
			<img src={MoviePoster} alt='' />
			<div className='movie-card-content'>
				<div className='movie-card-title'>Mechamato</div>
				<div className='movie-card-description'>
					120 mins | Family, Adventure, Action
				</div>
				{!isMobile && (
					<div className='movie-card-casts'>
						Cast:
						<span style={{ color: '#6768AB', marginLeft: '0.5rem' }}>
							Hazman, Nurul Ain, Sofea Jane Hazman, Nurul Ain, Sofea Jane
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
