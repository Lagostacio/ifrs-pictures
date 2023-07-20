const express = require('express')
// const cors = require('cors');
const app = express()
const port = 4000

const  routes  = require('./routes/')


// app.use((req, res, next) => {
//     //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//     res.header("Access-Control-Allow-Origin", "*");
//     //Quais são os métodos que a conexão pode realizar na API
//     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
//     app.use(cors());
//     next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

app.use(routes.photos)

app.get('/', (req, res) => {
    res.send('ok')
})


app.post('/login', (req, res) => {
    const { user, password } = req.body
    if (user == '123' && password == '123')
        return res.send('ok')

    return res.status(400).send('Deu erro!!!')
})




app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})
