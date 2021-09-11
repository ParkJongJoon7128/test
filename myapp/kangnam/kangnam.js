const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getHTML = async () => {
	try {
		return await axios.get('https://web.kangnam.ac.kr', {
			headers: {
				Accept: 'text/html'
			}
		});
	} catch (error) {
		console.log(error);
	}
};

getHTML()
	.then(html => {
	let ulList = [];
	const $ = cheerio.load(html.data);
	const $allNotices = $("ul.tab_listl div.list_txt");
	
	$allNotices.each(function(idx, element) {
		ulList[idx] = {
			title : $(this).children('a').attr('title'),
			url : $(this).children('a').attr('href'),
		};
	});
	
	const data = ulList.filter(n => n.title);
	return data;
}). then(res => log(res));