const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const {routeUser} = require('./controller/user.controller');

const app = express();

app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
/* app.use(cors({ origin: "http://localhost:5173/", credentials: true })); //не работает */
app.use(cookieParser());
app.use(bodyParser.json());
/* app.use(cors({
    origin:'http://localhost:5173',
    credentials: true,
})); */
app.use("/user", routeUser);

app.use((error,req,res, next)=>{res.send(error.message)})


module.exports = app