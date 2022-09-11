//encapsulation
const ItemDetails = ({ data }) => {

    return (
        <div className="item-details">
            <h3>{data.name}</h3>
            <p><strong>Price per Unit (USD): </strong> {data.price} </p>
            <p><strong>Quantity: </strong> {data.quantity} </p>
            <p>{data.createdAt}</p>
        </div>
        
    )
}

export default ItemDetails