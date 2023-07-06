const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000


app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('ok')
})

app.post('/teste', (req, res) => {
    console.log(req.body)
    res.status(200).send('ok')
    // res.send()
})


app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})
