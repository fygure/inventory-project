//=========================================================================//
//TODO:
//GET item by id [x]
//GET entire inventory [x]
//POST item to inventory [x]
//DELETE item from inventory by ID and name [x]
//UPDATE item by id [x]
//=========================================================================//
//Imports
const mongoose = require('mongoose')
const Item = require('../models/inventory_model')
//=========================================================================//
const getItemId = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json( {error: 'item not found'} )
    }

    const item = await Item.findById(id)

    if(!item) {
        return res.status(404).json( {error: 'item not found'} )
    }
    //success
    res.status(200).json(item)
}
//=========================================================================//
const getAllInventory = async (req, res) => {
    // {} finds all of them
    const inventory = await Item.find({}).sort({createdAt: -1})
    res.status(200).json(inventory)
}
//=========================================================================//
const addItem = async (req, res) => {

    const {name, price, quantity, fragile} = req.body

    //add doc to db
    try {
        const item = await Item.create( {name, price, quantity, fragile} )
        res.status(200).json(item)
    } catch(error) {
        res.status(400).json( {error: error.message} )
    }
}
//=========================================================================//
const deleteItemID = async(req, res) => {
    //grab id route
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json( {error: 'item does not exist'} )
    }

    const item = await Item.findOneAndDelete( {_id: id} )

    if (!item) {
        return res.status(400).json( {error: 'item does not exist'} )
    }
    //success
    res.status(200).json(item)
}
//=========================================================================//
const deleteItemName = async(req, res) => {

    const item = await Item.findOneAndDelete( {name: req.name} )

    if (!item) {
        return res.status(400).json( {error: 'item does not exist'} )
    }
    //success
    res.status(200).json(item)
}
//=========================================================================//
const updateItemID = async(req, res) => {

    const { id } = req.params

    //check valid id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'invalid ID/no such item exists'})
    }
    
    const item = await Item.findOneAndUpdate( {_id: id}, {
        //updates here
        ...req.body
    } )

    if (!item) {
        return res.status(400).json( {error: 'invalid ID/no such item exists'})
    }

    //success
    res.status(200).json(item)


}
//=========================================================================//

module.exports = {
    getItemId,
    getAllInventory,
    addItem,
    deleteItemID,
    updateItemID,
    deleteItemName
}