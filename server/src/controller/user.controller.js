const express = require("express")
const {createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require ("../service/service")
const route = express.Router();

route.post('/', async (req, res)=>{
    try {
        const{name, surname, email, password} = req.body;
        const data = await createUser(name, surname, email, password)
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
route.get('/', async (req, res)=>{
    try {
        const data = await getAllUsers();
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
route.get('/:id', async (req, res)=>{
    try {
        const{id} = req.params;
        const data = await getUserById(id);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
route.put('/:id', async (req, res)=>{
    try {
        const{id} = req.params;
        const{name, surname, email, password} = req.body;
        const data = await updateUserById(id, name, surname, email, password);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})
route.delete('/:id', async (req, res)=>{
    try {
        const{id} = req.params;
        const data = await deleteUserById(id);
        res.send(data)
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = route