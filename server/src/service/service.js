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

async function authorization(email, password){
    const userFound = await getUserByEmailDB(email);
    if(!userFound.length) throw new Error('пользователя с таким email не существует');
    const isMatch = await bcrypt.compare(password, userFound[0].password);
    console.log(isMatch);
    if(!isMatch) throw new Error('пароли не совпадают. Авторизация не произведена');
    return `Авторизация успешна!`;
}

module.exports = {authorization, createUser, getAllUsers, getUserById, updateUserById, deleteUserById}