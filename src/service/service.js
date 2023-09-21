const {createUserDB,getAllUsersDB, getUserByIdDB, updateUserByIdDB} = require("../repository/repository")

async function createUser(name, surname, email, password){
    const data = await createUserDB(name, surname, email, password);
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

module.exports = {createUser, getAllUsers, getUserById, updateUserById}