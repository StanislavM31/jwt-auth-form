const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    port:5432,
    user:"postgres",
    database: "jwt_auth_form",
    password: "2020"
})

module.exports = pool;
