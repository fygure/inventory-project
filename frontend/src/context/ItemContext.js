import { createContext, useReducer } from 'react'


export const ItemContext = createContext()

export const itemReducer = (state, action) => {
    switch(action.type) {
        case 'SET_ITEMS':
            return {
                data: action.payload
            }
        case 'ADD_ITEM':
            return {
                data: [action.payload, ...state.data]
            }
        default:
            return state
    }
}

//children would represent the app component wrapped inside index.js
export const ItemContextProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(itemReducer, {
        items: null
    })

    //dispatch({ type: 'ADD_ITEM', payload: [{}, {}, {}, {}] })

    return (
        <ItemContext.Provider value={{...state, dispatch}}>
            { children }
        </ItemContext.Provider>
    )
}
