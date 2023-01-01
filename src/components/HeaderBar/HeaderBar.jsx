import PropTypes from 'prop-types';
import Search from '../Search/Search';
import './headerbar.css';

export default function HeaderBar({ title }) {
	return (
		<div className='headerBar'>
			<div className='logo'>{title}</div>
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
