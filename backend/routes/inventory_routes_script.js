const express = require('express')
const { getAllInventory, getItemId, addItem, deleteItemID, deleteItemName, updateItemID } = require('../controllers/inventory_controllers')

// Router for server.js
const router = express.Router()

//GET item by id
router.get('/:id', getItemId)

//GET entire inventory
router.get('/', getAllInventory)

//POST item to inventory
router.post('/', addItem)

//DELETE item from inventory
router.delete('/:id', deleteItemID)
router.delete('/:name', deleteItemName)

//UPDATE item by id
router.patch('/:id', updateItemID)

module.exports = router
