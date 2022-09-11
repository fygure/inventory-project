import { ItemContext } from "../context/ItemContext"
import { useContext } from 'react'

export const useItemContext = () => {
    const context = useContext(ItemContext)

    //checks if within scope
    if (!context) {
        throw Error('useItemContext must be used inside an useItemProvider')
    }

    return context
}