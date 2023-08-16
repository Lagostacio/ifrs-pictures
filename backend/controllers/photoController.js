const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_CONNECT;
const client = new MongoClient(uri, {
    useUnifiedTopology: true
});

async function run() {
    try {
        await client.connect();
        const database = client.db('ifrs_pictures')
        const collection = database.collection('photos')

        await database.command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
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

const getAll = () => photos

const getWaitList = async () => {
    const collection = await getCollection()
    const cursor = await collection.find({ status: null })
    const photos = await cursor.toArray();
    await closeConnection()

    return photos
}

const changeStatus = async (_id, status) => {

    const collection = await getCollection()
    const filter = { _id }
    const updateDocument = { $set: { status } }

    await collection.updateOne(filter, updateDocument)
    await closeConnection()
    return

}

const addPhoto = async (data) => {
    data.status = null

    const collection = await getCollection()
    await collection.insertOne(data)
    await closeConnection()
    return

}


module.exports = {
    getAll,
    getWaitList,
    changeStatus,
    addPhoto,
}