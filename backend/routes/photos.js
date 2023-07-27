const express = require('express')
const router = express.Router()

const { photoController } = require('../controllers/')
const isAuthenticated = require('../middlewares/isAuthenticated')

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



router.get('/photos', isAuthenticated, (req, res) => {
    return res.send(photoController.getWaitList());
})


router.put('/photos', isAuthenticated, (req, res) => {
    const { id, status } = req.body

    try {
        photoController.changeStatus(id, status)
        return res.send('ok')
    } catch (error) {
        return res.status(400).send('Oopsie! Operation failed!')
    }
})

module.exports = router 