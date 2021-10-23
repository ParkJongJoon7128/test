import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import NoticesList from './NoticesList';

const MainTemplate = () => {
	const Main = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		padding: '60px',
	};

	const Section01 = {
		margin: '25px',
		width: '55%',
		height: '60vh',
		backgroundColor: '#eeeeee',
		fontSize: '45px',
		textAlign: 'center',
	};

	const Section02 = {
		margin: '25px',
		width: '45%',
		height: '80vh',
		backgroundColor: '#ff0000',
		fontSize: '45px',
		textAlign: 'center',
	};

	const Section03 = {
		margin: '25px',
		width: '55%',
		height: '60vh',
		backgroundColor: '#eeeeee',
		fontSize: '45px',
		textAlign: 'center',
	};

	const [data, setData] = useState(null);
	useEffect(() => {
		const getData = async () => {
			const datas = await axios.get(
				'https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/koreanews'
			);
			setData(datas.data);
		};
		getData();
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	if (data === null) {
		return <div>Load....</div>;
	} else {
		return (
			<div className="Main" style={Main}>
				<div className="Section01" style={Section01}>
					공지사항
					<NoticesList mydata={data} />
				</div>

				<div className="Section03" style={Section03}>
					행사/안내
					<NoticesList mydata={data}/>
				</div>

				<div className="Section02" style={Section02}>
					튜터링 및 학공
				</div>
			</div>
		);
	}
};

export default MainTemplate;