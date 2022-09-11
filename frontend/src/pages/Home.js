//import { useEffect, useState } from 'react'
import { useEffect } from 'react'
import { useItemContext } from '../hooks/useItemContext'

//components
import ItemDetails from '../components/ItemDetails'
import ItemForm from '../components/ItemForm'

const Home = () => {
    //commented out at step 8
    //const [data, setData] = useState(null)
    const {data, dispatch} = useItemContext()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/inventory')
            const json = await response.json()

            if(response.ok) {
                //useState from react, removed at step 8
                //setData(json)
                dispatch( {type: 'SET_ITEMS', payload: json} )
            }
        }

        fetchData()

    }, []) //dependency array, fires once


    return (
        <div className="home">
            <div className="items">
                {data && data.map((data) => (
                    <ItemDetails key={data._id} data={data} />
                ))}
            </div>
            <ItemForm />
        </div>
    )
}

export default Home