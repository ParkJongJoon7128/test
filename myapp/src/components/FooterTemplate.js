import React from 'react';
import styles from '../styles/FooterTemplate.css';
import insta from '../images/instagram.png';

const FooterTemplate = () => {
	return (
		<div className="Footer" style={styles.Footer}>
			2021 © Park Jong Joon.
			<div>
				<img src={insta} className="instagram" alt="instagram" style={styles.instagram} />
			</div>
		</div>
	);
};

export default FooterTemplate;