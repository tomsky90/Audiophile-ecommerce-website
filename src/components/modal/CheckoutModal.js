import React from 'react';
import ReactDom from 'react-dom';

const CheckoutModal = ({ open, children }) => {

    const body = document.querySelector('body');
    if(open) {
        body.classList.add('modal-active');
       
    } 
 
    

   if(!open) {
      return null
   }
   else {
    return ReactDom.createPortal( 
        <>
        <div className='modal-overlay checkout-overlay'></div>
        <div className='modal checkout-modal'>
            
            {children}
        </div>
        </>, document.getElementById('portal')
     );
   }
    
}
 
export default CheckoutModal;