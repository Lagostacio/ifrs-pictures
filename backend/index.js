require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const cors = require('cors');

app.use(cors());

const routes = require('./routes/')



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
app.use(routes.login)

app.get('/', (req, res) => {
    res.send('ok')
})





app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})
