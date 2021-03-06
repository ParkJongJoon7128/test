import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import axios from 'axios';
import Event_InformationItem from './Event_InformationItem';
import './react-crawl-tabs.css';

const Event_InformationListBlock = styled.div`
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

const Event_InformationList = (props) => {
	const site = 'https://web.kangnam.ac.kr/';

	return (
		<div style={{ fontSize: '0.4em' }}>
			<div>
				<Tabs>
					<TabList>
						<Tab>전체</Tab>
						<Tab>교내</Tab>
						<Tab>교외</Tab>
						
					</TabList>

					<TabPanel>
						{props.mydata.slice(40, 48).map((ele) => (
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
						{props.mydata.slice(48, 56).map((ele) => (
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
						{props.mydata.slice(56, 64).map((ele) => (
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

export default Event_InformationList;