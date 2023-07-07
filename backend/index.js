const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000
var photos = [
    { id: 1, img: 'cat1.png', text: 'texto1', status: -1 },
    { id: 2, img: 'cat1.png', text: 'texto2', status: -1 },
]

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
app.get('/photos', (req, res) => {
    //envia as fotos que ainda não foram aprovadas ou recusadas
    res.send(photos.filter(v => v.status < 0));
})

app.put('/photos', (req, res) => {
    const { id, status } = req.body
    // altera o array de fotos
    // photos = photos.map(v => v.id != id ? v : {...v,status})
    let foto = photos.find(v => v.id == id)
    foto.status = status

    res.send('ok')
})

app.post('/login',(req,res)=> {
    console.log(req.body)
    return res.status(400).send('Deu erro!!!')
})


app.post('/teste', (req, res) => {
    console.log(req.body)
    res.status(200).send('ok')
})


app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})
