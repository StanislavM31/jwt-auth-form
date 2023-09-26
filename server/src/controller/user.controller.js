const express = require("express")
const {authorization, createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require ("../service/service")
const routeUser = express.Router();
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

routeUser.post('/', async (req, res)=>{
    try {
        const{name, surname, email, password} = req.body;
        const data = await createUser(name, surname, email, password)
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.get('/', async (req, res)=>{
    try {
        const data = await getAllUsers();
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.get('/:id', async (req, res)=>{
    try {
        const{id} = req.params;
        const data = await getUserById(id);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.put('/:id', async (req, res)=>{
    try {
        const{id} = req.params;
        const{name, surname, email, password} = req.body;
        const data = await updateUserById(id, name, surname, email, password);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
routeUser.delete('/:id', async (req, res)=>{
    try {
        const{id} = req.params;
        const data = await deleteUserById(id);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = {routeUser, api}