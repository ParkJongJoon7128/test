import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import axios from 'axios';
import NoticesItem from './NoticesItem';

const NoticesListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
`;

const sampleArticle = {
	title: 'title',
	url: 'https://google.com',
};

const NoticesList = (props) => {
	const site = 'https://web.kangnam.ac.kr/';

	return (
		<div style={{ fontSize: '0.4em' }}>
			<div style={{ border: 'solid 1px' }}>
				<Tabs>
					<TabList>
						<Tab>전체공지</Tab>
						<Tab>학사공지</Tab>
						<Tab>장학공지</Tab>
						<Tab>학습/상담</Tab>
						<Tab>취창업</Tab>
					</TabList>

					<TabPanel>
						{props.mydata.slice(0, 8).map((ele) => (
							<>
								<div>
									<a href={site + decodeURIComponent(ele.url.slice(17))}>
										{ele.title}
									</a>
								</div>
								<br />
							</>
						))}
					</TabPanel>

					<TabPanel>
						{props.mydata.slice(8, 16).map((ele) => (
							<>
								<div>
									<a href={site + decodeURIComponent(ele.url.slice(17))}>
										{ele.title}
									</a>
								</div>
								<br />
							</>
						))}
					</TabPanel>
					<TabPanel>
						{props.mydata.slice(16, 24).map((ele) => (
							<>
								<div>
									<a href={site + decodeURIComponent(ele.url.slice(17))}>
										{ele.title}
									</a>
								</div>
								<br />
							</>
						))}
					</TabPanel>
					<TabPanel>
						{props.mydata.slice(24, 32).map((ele) => (
							<>
								<div>
									<a href={site + decodeURIComponent(ele.url.slice(17))}>
										{ele.title}
									</a>
								</div>
								<br />
							</>
						))}
					</TabPanel>
					<TabPanel>
						{props.mydata.slice(32, 40).map((ele) => (
							<>
								<div>
									<a href={site + decodeURIComponent(ele.url.slice(17))}>
										{ele.title}
									</a>
								</div>
								<br />
							</>
						))}
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default NoticesList;