import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../appContext/App.context';

import { formatName } from '../utility/utilityFunctions';
import { formatPrice } from '../utility/utilityFunctions';


const Cart = () => {

    const { cartItems, onAdd, onRemove, itemsPrice, removeAllItems, modalOnClose} = useContext(AppContext);
   

    const cartItemsList = cartItems.map(item => <div className='cart-item-container' key={item.id}>
        <div className='cart-item-container__img-wrapper'> 
            <img src={process.env.PUBLIC_URL + `/assets/cart/image-${item.slug}.jpg`} alt={item.name} />
        </div>
        <div className='cart-item-container__txt-wrapper'>
            <h4>{formatName(item.name)}</h4>
            <p>{formatPrice(item.price)}</p>
        </div>
        <div className='cart-qty-container'>
            <input readOnly value={item.qty}/>
            <span onClick={() => {onRemove(item,1)}} className='decrease-quantity'>-</span>
            <span onClick={() => {onAdd(item, 1)}} className='increase-quantity'>+</span>
        </div>

        
        
    </div>)

    return ( 
        <div className='cart-wrapper'>
            <div className='cart-header'>
                <h2>Cart ({cartItems.length})</h2>
                <button onClick={removeAllItems} className='cart-remove-btn'>Remove all</button>
            </div>

            {cartItems.length === 0 && <h2>No items in your cart</h2>}
            
            {cartItemsList}
            
        <div className='price-container'>
            <p className='price-container__title'>TOTAL</p> 
            <p className='price-container__total-price'>{formatPrice(itemsPrice)}</p>
        </div>
        {cartItems.length > 0 && <Link onClick={modalOnClose} className='link-btn-orange checkout-link' to='/checkout'>CHECKOUT</Link>}
        {cartItems.length === 0 && <p className='link-btn-orange checkout-link' to='/checkout'>CHECKOUT</p>}
        
        </div>
     );
}
 
export default Cart;