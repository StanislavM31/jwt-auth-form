const express = require('express');

const {authorization} = require ('../service/api.service');
const api = express.Router();


api.post('/', async (req,res)=>{
    try {
        const{email, password} = req.body;
        const data = await authorization(email, password);
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
})
module.exports = api