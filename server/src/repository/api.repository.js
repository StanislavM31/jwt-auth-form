const pool = require ("../db");

async function getUserByEmailDB_auth(email){
    const client = await pool.connect();
    const sql = `SELECT * FROM users WHERE email = $1`;
    const result = (await client.query(sql,[email])).rows;
    console.log(result);
    return result;
}

module.exports =  {getUserByEmailDB_auth};
