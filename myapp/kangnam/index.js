const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;
const express = require("express");
const cors = require("cors");
const app = express();

const bodyparser = require("body-parser");

const mongoose = require("mongoose");
let detail = require("./models.js");

app.use(cors());
app.use(bodyparser.json());

let username;
let password;

mongoose.connect('mongodb+srv://whdwnsdk8111:whdwnsdk2@cluster0.nrmui.mongodb.net/test').then(()=>{
    console.log('connected');}
    ).catch(err => console.error(err))

app.get("/seeusers", (req, res) => {
  detail.find({}, (err, result ) => {
    return res.send(result)
  })
})

app.post("/newuser", (req, res) => {
  firstname = req.body.firstname;
  lastname = req.body.lastname;
  email = req.body.email;
  pass = req.body.password;
  res.send("done");
})

app.get("/newusersave", (req, res) => {
    detail.insertMany(
        [
          { firstname: firstname,
            lastname: lastname,
            email: email,
            password: pass }
          ],
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        }
      );
})

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

app.get("/newslist", (req, res) => {
  getHTML()
      .then(html => {
      const $ = cheerio.load(html.data);
      const $allNotices = $("ul.tab_listl div.list_txt");

      let resultArr = [];
      $allNotices.each(function(idx, element) {
          let itemObj = {
              title : $(this).children('a').attr('title'),
              url : $(this).children('a').attr('href'),
          };
          resultArr.push(itemObj);
      });
      
      resultArr.forEach((element) => {
          console.log(`현재 ${element._title}의 현황 : ${element._url}`);
      });
      return resultArr;

      // const data = ulList.filter(n => n.title);
      // return data;
  }). then((data) => res.send(data));
});

app.listen(process.env.PORT, () => {
    console.log("running")
});
