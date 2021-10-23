import React from 'react';

const HeaderTemplate = () => {
	
	const Header = {
		backgroundColor: '#0bb286',
        color: '#fff',
        fontSize: '32px',
        padding: '20px',
        width: '100%',
		height: '5vh'
	}
	
    return (
       <div className = "Header" style={Header}>
			인턴공고 및 학교공지 플랫폼 사이트
		</div>
    );
}

export default HeaderTemplate;




