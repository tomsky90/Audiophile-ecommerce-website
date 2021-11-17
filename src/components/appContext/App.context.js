import React, { createContext, } from 'react';
import { useState } from 'react';

 export const AppContext = createContext();

const AppProvider = ({children}) => {


    const [cartItems, setCartItems] = useState([]);
    const [isModalActive, setIsModalActive] = useState(false);

    const modalOnClose = () => {
        setIsModalActive(false)
    }

    const toggleModalActive = () => {
        setIsModalActive(!isModalActive)
    }


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

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.20;
    const shippingPrice = cartItems.length === 0 ? 0 : 50;
    const grandTotalPrice =  cartItems.length < 1 ? 0 : itemsPrice + shippingPrice;

    return (
        <AppContext.Provider
            value={{cartItems,
                 onAdd,
                 onRemove,
                 itemsPrice, 
                 removeAllItems, 
                 isModalActive, 
                 modalOnClose, 
                 toggleModalActive,
                 taxPrice,
                 shippingPrice,
                 grandTotalPrice
                }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;