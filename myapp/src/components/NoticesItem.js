import React from 'react';
import styled from 'styled-components';

const NoticesItemBlock = styled.div`
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
		margin-top: 1.5rem;
	}
`;

const NoticesItem = ({ article }) => {
	const { title, url } = article;
	return (
		<NoticesItemBlock>
			<div className="contents">
				<h6>
					<a href={url} target="_blank" rel="noopener noreferrer">
						{title}
					</a>
				</h6>
			</div>
		</NoticesItemBlock>
	);
};

export default NoticesItem;