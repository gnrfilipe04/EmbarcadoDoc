const express = require("express");
const home = require("./src/screens/Home");
const Login = require("./src/screens/Login");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/src'));

app.get("/", (_, res) => {

  res.send(Login())
  
});

app.post("/data", (req, res) => {
    
  res.send(home(req.body.user))

});

app.listen(3333, () => {

  console.log("rodando...");
  
});
