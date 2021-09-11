import React from 'react';

const FooterTemplate = () => {
	
	const Footer = {
		backgroundColor: '#0bb286',
        color: '#fff',
        fontSize: '32px',
        padding: '20px',
        width: '100%',
		height: '5vh',
		textAlign: "center"
	}
	
    return (
       <div className = "Footer" style={Footer}>
			박종준
		</div>
    );
}

export default FooterTemplate;

