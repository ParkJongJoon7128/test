import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoticesList from './NoticesList';
import Event_InformationList from './Event_InformationList';
import styles from '../styles/MainTemplate.css';

const MainTemplate = () => {
	
	const [data, setData] = useState(null);

	useEffect(() => {
		const getData = async () => {
			const datas = await axios.get('https://kangnam-site.herokuapp.com/newslist');
			setData(datas.data);
		};
		getData();
	}, []);
	
	
	if (data === null) {
		return <div>Load....</div>;
	} else {
		return (
			<div className="Main" style={styles.Main}>
				<div className="Section01" style={styles.Section01}>
					공지사항
					<NoticesList mydata={data} />
				</div>

				<div className="Section02" style={styles.Section02}>
					행사/안내
					<Event_InformationList mydata={data} />
				</div>

				<div className="Section02">
					<iframe
						class="airtable-embed"
						src="https://airtable.com/embed/shrfgCdEx63VN1viq?backgroundColor=cyan&viewControls=on"
						frameborder="0"
						onmousewheel=""
						width="100%"
						height="533"
						style={{background: "transparent", border: "1px solid #ccc"}}
					></iframe>
				</div>
			</div>
		);
	}
};

export default MainTemplate;