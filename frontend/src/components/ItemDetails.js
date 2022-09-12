import { itemReducer } from "../context/ItemContext"
import { useItemContext } from "../hooks/useItemContext"

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

//encapsulation
const ItemDetails = ({ data }) => {
    const  {dispatch} = useItemContext()

    const handleClick = async () => {
        const response = await fetch('/api/inventory/' + data._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_ITEM', payload: json})
        }
    }

    return (
        <div className="item-details">
            <h3>{data.name}</h3>
            <p><strong>Price per Unit (USD): </strong> {data.price} </p>
            <p><strong>Quantity: </strong> {data.quantity} </p>
            <p><strong>Fragile: </strong> {data.fragile} </p>
            <p>{formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
        
    )
}

export default ItemDetails

