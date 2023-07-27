const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_CONNECT;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    useUnifiedTopology: true
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = client.db('ifrs_pictures')
        const collection = database.collection('photos')
        // const photo = {filename: 'cat1.png', text: 'texto3', status: -1 }
        // await collection.insertOne(photo)

        // const cursor = await collection.find({status:-1})
        // await cursor.forEach(console.dir);

        await database.command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

// process.on('warning', e => console.warn(e.stack));

const getCollection = async () => {

    try {

        await client.connect();
        const database = client.db('ifrs_pictures')
        return database.collection('photos')

    } catch (error) {
        console.log(error)
    }
}

const closeConnection = async () => {
    await client.close();
}

var id = 4

const getAll = () => photos

const getWaitList = async () => {
    const collection = await getCollection()
    const cursor = await collection.find({ status: -1 })
    const photos = await cursor.toArray();
    await closeConnection()

    return photos
}

const changeStatus = async (_id, status) => {

    const collection = await getCollection()
    const filter = {_id}
    const updateDocument = {$set:{status}}
    
    await collection.updateOne(filter,updateDocument)
    await closeConnection()
    return 

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
}