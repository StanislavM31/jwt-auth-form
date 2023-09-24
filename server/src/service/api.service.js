const bcrypt = require('bcrypt')
const {getUserByEmailDB_auth } =    require ('../repository/api.repository')

async function authorization(email, password){
    const userFound = await getUserByEmailDB_auth(email);
    if(!userFound.length) throw new Error('пользователя с таким email не существует');
    const isMatch = await bcrypt.compare(password, userFound[0].password);
    console.log(isMatch);
    if(!isMatch) throw new Error('пароли не совпадают. Авторизация не произведена');
    return `Авторизация успешна!`;
}

module.exports = {authorization}