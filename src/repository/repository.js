const pool = require('../db')

async function createUserDB(name, surname, email, password){
    const client = await pool.connect();
    const sql = `INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING*`;
    const result = (await client.query(sql, [name, surname, email, password])).rows
    return result;
}
async function getAllUsersDB(){
    const client = await pool.connect();
    const sql = `SELECT * FROM users`;
    const result = (await client.query(sql)).rows
    return result;
}
async function getUserByIdDB(id){
    const client = await pool.connect();
    const sql = `SELECT * FROM users WHERE id=$1`;
    const result = (await client.query(sql, [id])).rows
    return result;
}
async function updateUserByIdDB(id, name, surname, email, password){
    const client = await pool.connect();
    const sql = `UPDATE users SET name=$1, surname=$2, email=$3, password=$4 WHERE id=$5 RETURNING*`;
    const result = (await client.query(sql, [name, surname, email, password, id])).rows
    return result;
}

module.exports = {createUserDB, getAllUsersDB, getUserByIdDB, updateUserByIdDB}