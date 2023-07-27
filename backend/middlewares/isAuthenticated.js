const jwt = require('jsonwebtoken')
const {loginController} = require('../controllers/')
const users = loginController.getUsers()

const isAuthenticated = (req,res,next) => {
    const {authorization} = req.headers

    if(!authorization)
        return res.status(401).send('Unauthorized!')

    
    const [identifier,token] = authorization.split(" ")

    if(identifier !== "Bearer")
        return res.status(401).send('Invalid token!')

    if(!token)
        return res.status(401).send('No token sent!')

    const {email} = jwt.decode(token)

    if(!users.find(user => user.email == email))
        return res.status(401).send('Access denied!')


    next()

}

module.exports = isAuthenticated