const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_CONNECT;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    useUnifiedTopology: true
});
const dbName = 'ifrs_pictures'
const getCollection = async ( collectionName ) => {

    try {

        await client.connect();
        const database = client.db(dbName)
        return database.collection(collectionName)

    } catch (error) {
        console.log(error)
    }
}

const closeConnection = async () => {
    await client.close();
}

module.exports = {
    getCollection,
    closeConnection
}
