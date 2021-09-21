import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({ open, children }) => {
   if(!open) {
      return null
   }
   else {
    return ReactDom.createPortal( 
        <>
        <div className='modal-overlay'></div>
        <div className='modal'>
            
            {children}
        </div>
        </>, document.getElementById('portal')
     );
   }
    
}
 
export default Modal;