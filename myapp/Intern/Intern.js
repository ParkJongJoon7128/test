const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const getHTML = async () => {
	try {
		return await axios.get('https://careerly.co.kr/jobs', {
			headers: {
				Accept: 'text/html',
			},
		});
	} catch (error) {
		console.log(error);
	}
};

getHtml()
	.then((html) => {
		let ulList = [];
		const $ = cheerio.load(html.data);
		const $bodyList = $('ul.tab_listl div.list_txt');
		$bodyList.each(function (i, elem) {
			ulList[i] = {
				title: $(this).find('span.ah_k').text(),
				url: $(this).find('a.ah_a').attr('href'),
			};
		});
		const data = ulList.filter((n) => n.title);
		return data;
	})
	.then((res) => log(res));