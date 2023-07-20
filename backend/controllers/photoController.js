const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

var photos = [
    { id: 1, filename: 'cat1.png', text: 'texto1', status: -1 },
    { id: 2, filename: 'cat1.png', text: 'texto2', status: -1 },
    { id: 3, filename: 'cat1.png', text: 'texto3', status: -1 },
]

var id = 4

const getAll = () => photos

const getWaitList = () => photos.filter(v => v.status === -1)

const changeStatus = (id, status) => {

    // altera o array de fotos
    // photos = photos.map(v => v.id != id ? v : {...v,status})
    let photo = photos.find(v => v.id == id)
    return photo.status = status

}

const addPhoto = (data) => {
    data.id = id++
    data.status = -1

    console.log(data)
    return photos.push(data)

}


module.exports = {
    getAll,
    getWaitList,
    changeStatus,
    addPhoto,
    upload
}