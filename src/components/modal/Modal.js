import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({ open, children, onClose }) => {

   const body = document.querySelector('body');
   if(!open) {
      body.classList = '';
   } else {
      body.classList = 'modal-active';
   }

   if(!open) {
      return null
   }
   else {
    return ReactDom.createPortal( 
        <>
        <div onClick={onClose} className='modal-overlay'></div>
        <div className='modal'>
            
            {children}
        </div>
        </>, document.getElementById('portal')
        
     );
   }
    
}
 
export default Modal;