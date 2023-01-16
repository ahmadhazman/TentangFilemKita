import Features from '../../components/Features/Features';
import HeaderBar from '../../components/HeaderBar/HeaderBar';
import Hero from '../../components/Hero/Hero';
import './_landing.scss';

export default function Landing() {
	return (
		<div className='landing-container'>
			<section className='header'>
				<HeaderBar />
				<Hero />
			</section>
			<Features />
		</div>
	);
}
