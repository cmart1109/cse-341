const mongodb = require('../data/database');
const ObjectId= require('mongodb').ObjectId;

const getAll = async (req,res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    console.log('getting the data')
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts);
    });  
};

const getSingle = async (req,res) => {
    const contactId = new ObjectId(req.params.Id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(contacts[0]);
    });  
};

module.exports = {
    getAll,
    getSingle
}