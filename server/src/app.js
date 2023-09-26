const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {routeUser, api} = require('./controller/user.controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", routeUser);
app.use("/auth", api);
app.use((error,req,res, next)=>{res.send(error.message)})


module.exports = app