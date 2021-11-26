import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../appContext/App.context';

import { formatName } from '../utility/utilityFunctions';
import { formatPrice } from '../utility/utilityFunctions';


const CheckoutMessage = () => {
    
    const {cartItems, grandTotalPrice, removeAllItems } = useContext(AppContext)

    const hideModal = () => {
        const body = document.querySelector('body');
        body.classList = '';
    }
    return ( 
        <div className='checkout-message-wraper'>
            <div>
                <div className='icon-wrapper'>
                    <i className="icon fas fa-check"></i>
                </div>
                <h1>Thank you for your order</h1>
                <p>You will recive an  email confirmation shortly.</p>
                <div className='checkout-message-wrapper'>
                    <div className='checkout-message'>
                        <div className='checkout-message__item-wrapper'>
                                <div className='checkout-message__img-wrapper'> 
                                    <img src={process.env.PUBLIC_URL + `/assets/cart/image-${cartItems[0].slug}.jpg`} alt={cartItems[0].name} />
                                </div>
                                <div className='checkout-message__txt-wrapper'>
                                    <h4 className='checkout-message__name'>{formatName(cartItems[0].name)}</h4>
                                    <p>{formatPrice(cartItems[0].price)}</p>
                                </div>
                                <div className='checkout-message__qty-container'>
                                    <span>x{cartItems[0].qty}</span>
                                </div>
                            </div>
                            {cartItems.length > 1 ? <p className='checkout-message__extra-items'>and {cartItems.length - 1} other item(s)</p> : null}

                            

                    </div>
                    <div className='checkout-message__total-price'>
                        <p>GRAND TOTAL</p>
                        <h3>{formatPrice(grandTotalPrice)}</h3>
                     </div>
                        
                </div>
                

                <Link onClick={() => {hideModal() ; removeAllItems()}} className='checkout-message__home-link' to='/'>
                        Backo to home
                    </Link>
            </div>
        </div>
     );
}
 
export default CheckoutMessage;