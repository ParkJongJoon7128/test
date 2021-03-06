const axios = require('axios');
const cheerio = require('cheerio');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const getHTML = async () => {
	try {
		return await axios.get('https://web.kangnam.ac.kr/', {
			headers: {
				Accept: 'text/html'
			}
		});
	} catch (error) {
		console.log(error);
	}
};

app.get("/", (req, res) => {
	getHTML()
		.then((html) => {
		let resultArr = [];
		const $ = cheerio.load(html.data);
		const $allNotices = $("ul.tab_listl div.list_txt");

		$allNotices.each(function(idx, element) {
			let itemObj = {
				title : $(this).children('a').attr('title'),
				url : $(this).children('a').attr('href'),
			};
			resultArr.push(itemObj);
		});
		
		resultArr.forEach((element) => {
			console.log(`${element.title}`);
		});
		return resultArr;

		// const data = ulList.filter(n => n.title);
		// return data;
	}). then((data) => res.send(data));
});

app.listen(PORT, () => 
	console.log('Server listening on port 3000')
);