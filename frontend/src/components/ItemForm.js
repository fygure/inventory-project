import { useState } from "react"

//To add an item to the warehouse
const ItemForm = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [fragile, setFragile] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        //stop page refresh on submit
        e.preventDefault()

        const item = {name, price, quantity, fragile} 

        const response = await fetch('/api/inventory', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setName('')
            setPrice('')
            setQuantity('')
            setFragile('')
            setError(null)
            console.log('new item addded', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h2>Add a New Item</h2>

            <label>Item Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Price per Unit (USD):</label>
            <input 
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />

            <label>Quantity:</label>
            <input 
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
            />

            <label>Fragile:</label>
            <input 
                type="text"
                onChange={(e) => setFragile(e.target.value)}
                value={fragile}
            />

            <button>Add Item</button>
            {error && <div className="error">{error}</div>}
        </form>
        
    )
}

export default ItemForm