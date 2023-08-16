const express = require('express')
const router = express.Router()

const { photoController } = require('../controllers/')
const isAuthenticated = require('../middlewares/isAuthenticated')
const upload = require('../controllers/multer')


// Define a route for file upload
router.post('/photos', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { text } = req.body
    const { filename } = req.file
    photoController.addPhoto({ text, filename })

    res.send('File uploaded successfully!');
});



router.get('/photos', isAuthenticated, async (req, res) => {
    const photos = await photoController.getWaitList()
    return res.send(photos);
})


router.put('/photos', isAuthenticated, async (req, res) => {
    const { _id, status } = req.body
    console.log(req.body)
    try {
        await photoController.changeStatus(_id, status)
        return res.send('ok')
    } catch (error) {
        return res.status(400).send('Falha ao enviar foto! Tente novamente!!!')
    }
})

module.exports = router 