import './_genrescard.scss';

export default function GenresCard({ genre, image, imagePosition }) {
	return (
		<div className='genre-card'>
			<div className='genre-container'>
				<h4>{genre}</h4>
			</div>
			<img
				src={image}
				alt={genre}
				style={{ objectPosition: `0 ${imagePosition}` }}
			/>
		</div>
	);
}
