import { useEffect, useState } from 'react'

//components
import ItemDetails from '../components/ItemDetails'

const Home = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/inventory')
            const json = await response.json()

            if(response.ok) {
                setData(json)
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
        </div>
    )
}

export default Home