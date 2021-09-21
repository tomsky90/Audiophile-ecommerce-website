import React, { createContext } from 'react';
import { useState } from 'react';

 export const AppContext = createContext();

const AppProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])

    const onAdd = (product, quantity) => {
        const exist = cartItems.find(cartItem => cartItem.id === product.id);
        if(exist) {
            setCartItems(cartItems.map( cartItem => cartItem.id === product.id ? { ...exist, qty: exist.qty + quantity} : cartItem))
        } else {
            setCartItems([...cartItems, {...product, qty: quantity}])
        }
    }

    return (
        <AppContext.Provider
            value={{cartItems, onAdd}}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;