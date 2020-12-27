import React from 'react';

const Header = () => {
	return (
		<footer
			style={{
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				color: 'white',
				padding: '.5rem',
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'space-around',
			}}>
			<p>
				Built with❤ and <a href='https://react-bootstrap.github.io/'>React</a>{' '}
				by <a href='https://github.com/jtomassoni'>JT</a>
			</p>
		</footer>
	);
};

export default Header;
