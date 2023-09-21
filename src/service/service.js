const {createUserDB,getAllUsersDB, getUserByIdDB, updateUserByIdDB, deleteUserByIdDB, getUserByEmailDB} = require("../repository/repository")
const bcrypt = require('bcrypt');
const salt = 3;

async function createUser(name, surname, email, password){
    const foundUser = await getUserByEmailDB(email);
    if(foundUser.length) throw new Error("user with this email already exist");
    const pwd = await bcrypt.hash(password, salt);

    const data = await createUserDB(name, surname, email, pwd);
    return data;
}
async function getAllUsers(){
    const data = await getAllUsersDB();
    return data;
}
async function getUserById(id){
    const data = await getUserByIdDB(id);
    return data;
}
async function updateUserById(id, name, surname, email, password){
    const data = await updateUserByIdDB(id, name, surname, email, password);
    return data;
}
async function deleteUserById(id){
    const data = await deleteUserByIdDB(id);
    return data;
}

module.exports = {createUser, getAllUsers, getUserById, updateUserById, deleteUserById}