import PropTypes from 'prop-types';
import MovieCardMain from '../Cards/MovieCardMain/MovieCardMain';
import Search from '../Search/Search';
import FilmStars from './FilmStars/FilmStars';
import Genres from './Genres/Genres';
import PopularMovies from './PopularMovies/PopularMovies';
import TopMovies from './TopMovies/TopMovies';
import TVShows from './TVShows/TVShows';
import './_features.scss';

export default function Features() {
	return (
		<section className='features'>
			{/* TOP MOVIES */}
			<div className='feature-container'>
				<div className='feature-header'>
					<div className='feature-title'>
						<span className='vertical-line'></span>
						<h3>Top Movies</h3>
					</div>
					<h4>View More &#62;</h4>
				</div>
				<TopMovies />
			</div>

			{/* POPULAR MOVIES */}
			<div className='feature-container'>
				<div className='feature-header'>
					<div className='feature-title'>
						<span className='vertical-line'></span>
						<h3>Popular Of 2022</h3>
					</div>
					<h4>View More &#62;</h4>
				</div>
				<PopularMovies />
			</div>

			{/* MOVIE GENRES */}
			<div className='feature-container'>
				<div className='feature-header'>
					<div className='feature-title'>
						<span className='vertical-line'></span>
						<h3>Genres</h3>
					</div>
				</div>
				<Genres />
			</div>

			{/* TV SHOWS */}
			<div className='feature-container'>
				<div className='feature-header'>
					<div className='feature-title'>
						<span className='vertical-line'></span>
						<h3>Popular TV Shows</h3>
					</div>
					<h4>View More &#62;</h4>
				</div>
				<TVShows />
			</div>

			{/* TOP ACTORS */}
			<div className='feature-container'>
				<div className='feature-header'>
					<div className='feature-title'>
						<span className='vertical-line'></span>
						<h3>Malaysian-Based Film Star</h3>
					</div>
				</div>
				<FilmStars />
			</div>
		</section>
	);
}
