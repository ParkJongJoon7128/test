import React from 'react';
import styled from 'styled-components';

const Event_InformationItemBlock = styled.div`
	display: flex;
	.contents {
		h6 {
			margin: 15px;
			a {
				color: black;
			}
		}
	}
	& + & {
		margin-top: 30px;
	}
`;

const Event_InformationItem = ({ article }) => {
	const { title, url } = article;
	return (
		<Event_InformationItemBlock>
			<div className="contents">
				<h6>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</h6>
			</div>
		</Event_InformationItemBlock>
	);
};

export default Event_InformationItem;