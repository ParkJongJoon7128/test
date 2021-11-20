import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NoticesList from './NoticesList';
import Event_InformationList from './Event_InformationList';

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
		backgroundColor: '#fff',
		fontSize: '45px',
		textAlign: 'center',
	};

	const Section02 = {
		margin: '25px',
		width: '45%',
		height: '60vh',
		backgroundColor: '#ff0000',
		fontSize: '45px',
		textAlign: 'center',
	};

	
	const [data, setData] = useState(null);
	useEffect(() => {
		const getData = async () => {
			const datas = await axios.get(
				'https://kangnam-site.herokuapp.com/newslist'
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

				<div className="Section03" style={Section01}>
					행사/안내
					<Event_InformationList mydata={data} />
				</div>

				<div className="Section02" style={Section02}>
					인턴공고
				</div>
			</div>
		);
	}
};

export default MainTemplate;