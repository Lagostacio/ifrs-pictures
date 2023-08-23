const express = require('express')
const router = express.Router()

const { loginController } = require('../controllers/')



router.post('/login', (req, res) => {
    const { email, password } = req.body
    const { token, status, msg } = loginController.verifyLogin(email, password)

    return res.status(status).send({ token, msg })
})


module.exports = router