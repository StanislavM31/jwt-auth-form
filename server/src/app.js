const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./controller/user.controller');
const api = require("./controller/api.controller")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", user);
app.use("/auth", api);
app.use((error,req,res, next)=>{res.send(error.message)})


module.exports = app