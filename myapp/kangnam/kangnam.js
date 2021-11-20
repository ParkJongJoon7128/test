let username;
let passname;

mongoose.connect('mongodb+srv://<whdwnsdk8111>:<whdwnsdk2>@cluster0.nrmui.mongodb.net/test').then(()=>{
    console.log('connected');}
    ).catch(err => console.error(err))

app.get("/seeusers", (req, res) => {
  detail.find({}, (err, result ) => {
    return res.send(result)
  })
})

app.post("/newuser", (req, res) => {
  username = req.body.username;
  passname = req.body.passname;
  res.send("done");
})

app.get("/newusersave", (req, res) => {
    detail.insertMany(
        [
          { name: username,
            pass: passname }
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