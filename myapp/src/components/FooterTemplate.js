import React from 'react';
import styles from '../styles/FooterTemplate.css';
import { FiInstagram } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';

const FooterTemplate = () => {
	return (
		<div className="Footer" style={styles.Footer}>
			Copyright Ⓒ 2021. Park Jong Joon. All right reserved.
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '22px' }}>
				<div
					style={{
						backgroundColor: '#fff',
						width: '45px',
						height: '45px',
						borderRadius: '50%',
						marginRight: '10px',
					}}
					className="FiInstagram"
					onClick={ (e) =>  window.location.href='https://www.instagram.com/jong._.joon/?hl=ko'}
				>
					<FiInstagram
						color={'#320bb2'}
						size={30}
						style={{ marginTop: 7, marginLeft: 1 }}
					/>
				</div>
				<div
					style={{
						backgroundColor: '#fff',
						width: '45px',
						height: '45px',
						borderRadius: '50%',
						marginRight: '10px',
					}}
					className="BsFacebook"
					onClick={ (e) =>  window.location.href='https://www.facebook.com/profile.php?id=100008341442712'}
				>
					<BsFacebook
						color={'#320bb2'}
						size={30}
						style={{ marginTop: 7, marginLeft: 1 }}
					/>
				</div>
				<div
					style={{
						backgroundColor: '#fff',
						width: '45px',
						height: '45px',
						borderRadius: '50%',
						marginRight: '10px',
					}}
					className="SiNotion"
					onClick={ (e) =>  window.location.href='https://www.notion.so/ee2d05f506224bce859117314530b00a'}
				>
					<SiNotion color={'#320bb2'} size={30} style={{ marginTop: 7, marginRight: 1 }} />
				</div>
			</div>
		</div>
	);
};

export default FooterTemplate;