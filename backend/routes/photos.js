const express = require('express')
const router = express.Router()
const cors = require('cors');

const { photoController } = require('../controllers/')

router.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});



// Define a route for file upload
router.post('/photos', photoController.upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
    const { text } = req.body
    const { filename } = req.file
    photoController.addPhoto({ text, filename })

    res.send('File uploaded successfully!');
});



router.get('/photos', (req, res) => {
    return res.send(photoController.getWaitList());
})


router.put('/photos', (req, res) => {
    const { id, status } = req.body

    if (photoController.changeStatus(id, status))
        return res.send('ok')

    return res.status(400).send('deu erro!!!')

})

module.exports = router 