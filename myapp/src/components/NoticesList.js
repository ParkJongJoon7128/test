import React from 'react';
import styled from 'styled-components';
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

const NoticesList = () => {
	return (
		<NoticesListBlock>
			<NoticesItem article={sampleArticle} />
			<NoticesItem article={sampleArticle} />
			<NoticesItem article={sampleArticle} />
			<NoticesItem article={sampleArticle} />
		</NoticesListBlock>
	);
};

export default NoticesList;