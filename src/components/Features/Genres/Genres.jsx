import CrimeImage from '../../../assets/images/Poster/KL Gangster Poster.jpg';
import FamilyImage from '../../../assets/images/Poster/Kongsi Ray Poster.jpg';
import AdventureImage from '../../../assets/images/Poster/Magika Poster.jpg';
import HistoryImage from '../../../assets/images/Poster/Mat Kilau Poster.jpg';
import AnimationImage from '../../../assets/images/Poster/Mechamato Poster.jpg';
import HorrorImage from '../../../assets/images/Poster/Munafik Alt Poster.jpg';
import DramaImage from '../../../assets/images/Poster/Ombak Rindu.jpg';
import ActionImage from '../../../assets/images/Poster/Paskal Poster.jpg';
import MusicalImage from '../../../assets/images/Poster/Pendekar Bujang Lapok Poster.jpg';
import ThrillerImage from '../../../assets/images/Poster/Polis Evo Poster.jpg';
import ComedyImage from '../../../assets/images/Poster/Senario Poster.jpg';
import RomanceImage from '../../../assets/images/Poster/Sepet Poster.jpg';
import GenresCard from '../../Cards/GenresCard/GenresCard';
import './_genres.scss';

export default function Genres() {
	return (
		<div className='genres-container'>
			<GenresCard genre='Action' image={ActionImage} imagePosition={'20%'} />
			<GenresCard
				genre='Adventure'
				image={AdventureImage}
				imagePosition={'60%'}
			/>
			<GenresCard
				genre='Animation'
				image={AnimationImage}
				imagePosition={'50%'}
			/>
			<GenresCard genre='Comedy' image={ComedyImage} imagePosition={'35%'} />
			<GenresCard genre='Crime' image={CrimeImage} imagePosition={'20%'} />
			<GenresCard genre='Drama' image={DramaImage} imagePosition={'25%'} />
			<GenresCard genre='Family' image={FamilyImage} imagePosition={'35%'} />
			<GenresCard genre='Horror' image={HorrorImage} imagePosition={'48%'} />
			<GenresCard
				genre='History'
				image={HistoryImage}
				imagePosition={'17%'}
			/>
			<GenresCard
				genre='Musical'
				image={MusicalImage}
				imagePosition={'50%'}
			/>
			<GenresCard
				genre='Romance'
				image={RomanceImage}
				imagePosition={'36%'}
			/>
			<GenresCard
				genre='Thriller'
				image={ThrillerImage}
				imagePosition={'30%'}
			/>
		</div>
	);
}
