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

    const onRemove = (product, quantity) => {
        const exist = cartItems.find(cartItem => cartItem.id === product.id);
        if(exist.qty ===1) {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== product.id))
        } else {
            setCartItems(cartItems.map(cartItem => cartItem.id === product.id ? {...exist, qty: exist.qty - quantity} : cartItem))
        }
    }

    const removeAllItems = () => {
        setCartItems([])
    }

    const calculateTotalPrice = () => cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    return (
        <AppContext.Provider
            value={{cartItems, onAdd, onRemove, calculateTotalPrice, removeAllItems}}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;