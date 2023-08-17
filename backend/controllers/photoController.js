const { getCollection, closeConnection } = require('./dbConnection')

const getAll = async () => {
    const collection = await getCollection('photos')
    const cursor = await collection.find()
    const photos = await cursor.toArray();
    await closeConnection()

    return photos
}

const getWaitList = async () => {
    const collection = await getCollection('photos')
    const cursor = await collection.find({ status: null})
    const photos = await cursor.toArray();
    await closeConnection()

    return photos
}

const changeStatus = async (_id, status) => {

    const collection = await getCollection('photos')
    const filter = { _id }
    const updateDocument = { $set: { status } }

    await collection.updateOne(filter, updateDocument)
    await closeConnection()
    return

}

const addPhoto = async (data) => {
    data.status = null


    try {
        const collection = await getCollection('photos')
        const addedPhoto = await collection.insertOne(data)
        await closeConnection()
        return addedPhoto

    } catch (error) {
        return error
    }

}


module.exports = {
    getAll,
    getWaitList,
    changeStatus,
    addPhoto,
}