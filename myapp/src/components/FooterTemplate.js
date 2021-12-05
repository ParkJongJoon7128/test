import React from 'react';
import styles from '../styles/FooterTemplate.css';
import { FiInstagram } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';

const FooterTemplate = () => {
	return (
		<div className="Footer" style={styles.Footer}>
			2021 © Park Jong Joon.
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
				<div
					style={{
						backgroundColor: '#fff',
						width: '45px',
						height: '45px',
						borderRadius: '50%',
						marginRight: '10px'
					}}
				>
					<FiInstagram color={'#320bb2'} size={30} style= {{marginTop: 6}} />
				</div>
				<div
					style={{
						backgroundColor: '#fff',
						width: '45px',
						height: '45px',
						borderRadius: '50%',
						marginRight: '10px'
					}}
				>
					<BsFacebook color={'#320bb2'} size={30} style= {{marginTop: 6}}  />
				</div>
				<div
					style={{
						backgroundColor: '#fff',
						width: '45px',
						height: '45px',
						borderRadius: '50%',
						marginRight: '10px'
					}}
				>
					<SiNotion color={'#320bb2'} size={30} style= {{marginTop: 6}}  />
				</div>
			</div>
		</div>
	);
};

export default FooterTemplate;