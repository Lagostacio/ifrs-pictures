const jwt = require('jsonwebtoken')

const users = [
    {
        email: 'email@1',
        password: '123',
    },
    {
        email: 'email@2',
        password: '123',
    },
]



const verifyLogin = (email, password) => {

    const verify = () => {

        if (!email || !password)
            return [false, 400, 'Campos obrigatórios em branco!!']

        if (users.find(usr => usr.email == email && usr.password == password)) {
            const token = jwt.sign({ email }, process.env.AUTH_SECRET, {expiresIn:'60s'})
            return [token, 200, 'ok']
        }

        return [false,400, 'erro']
    }
    const [token,status,msg] = verify()
    return { token, status, msg }
}

const getUsers = () => users

module.exports = {
    verifyLogin,
    getUsers
}