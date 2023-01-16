import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './_headerbar.scss';

export default function HeaderBar({ title }) {
	return (
		<div className='headerBar'>
			<div className='container'>
				<Logo />
				<ul>
					<li>Movies</li>
					<li>TV Shows</li>
				</ul>
			</div>
			<Search />
		</div>
	);
}

HeaderBar.defaultProps = {
	title: 'TentangFilemKita',
};

HeaderBar.propTypes = {
	title: PropTypes.string.isRequired,
};
