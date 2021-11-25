import React from 'react';
import { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import Cart from '../cart/Cart';

import hamburgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';
import logo from '../../assets/shared/desktop/logo.svg';
import cartIcon from '../../assets/shared/desktop/icon-cart.svg';
import headphons from '../../assets/shared/desktop/image-headphones.png';
import speakers from '../../assets/shared/desktop/image-speakers.png';
import earphones from '../../assets/shared/desktop/image-earphones.png';

import { AppContext } from '../appContext/App.context';

// import '../../styles/nav.scss'

const Navigation = () => {

    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

        const {isModalActive, modalOnClose, toggleModalActive, cartItems} = useContext(AppContext);

    const toggleMobileNav =  () => {
        setIsMobileNavActive(!isMobileNavActive)
       
    }

    const mobileNavOnClose = () => {
        setIsMobileNavActive(false)
    }

    


    return ( 
        <div>
            <div className={isMobileNavActive ? 'blure blure--active' : 'blure'}></div>
            <header className='header'>
            
           
                    <div className='mobile-nav__hamburger-icon-container'>
                        <img onClick={() => {toggleMobileNav(); modalOnClose()}} className='mobile-nav__hamburger-icon' 
                            src={`${hamburgerIcon}` }
                            alt='menu icon'/>
                    </div>
                
                <div className='logo-container'>
                <Link onClick={() => {modalOnClose(); mobileNavOnClose()}} to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
                </div>

                <nav className='desktop-nav'>
                <ul className='desktop-nav__list'>
                <li className="desktop-nav__link">
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className="desktop-nav__link">
                    <Link to='/headphones'>
                        headphones
                    </Link>
                </li>
                <li className="desktop-nav__link">
                    <Link to='/speakers'>
                        speakers
                    </Link>
                </li>
                <li className="desktop-nav__link">
                    <Link to='/earphones'>
                        earphones
                    </Link>
                </li>
            </ul>
                </nav>


                <div className='cart-icon__container'>
                    <img onClick={() => {toggleModalActive(); mobileNavOnClose()}} src={`${cartIcon}`} alt="cart icon"/>
                    {cartItems.length > 0 && <div><span>{cartItems.length}</span></div>}
                </div>
                
            </header>
            
            
                    
                <nav className={isMobileNavActive ? 'mobile-nav mobile-nav--active' : 'mobile-nav'}>
            
                    <ul>
                         <li className='mobile-nav__link-container'>
                           <img src={`${headphons}`} alt=" headphones"/>
                           <h6 className='mobile-nav__title'>headphons</h6>
                            <NavLink className='nav-link-btn' to='/headphones' 
                            onClick={() => {
                                toggleMobileNav()}}>
                               <p className=''>shop</p> 
                            </NavLink>
                       </li>
                       <li className='mobile-nav__link-container'>
                           <img src={`${speakers}`} alt="speakers"/>
                           <h6 className='mobile-nav__title'>speakers</h6>
                            <NavLink className='nav-link-btn' to='/speakers' onClick={toggleMobileNav}>
                               <p className=''>shop</p> 
                            </NavLink>
                       </li>
                       <li className='mobile-nav__link-container'>
                           <img src={`${earphones}`} alt="earphones"/>
                           <h6 className='mobile-nav__title'>earphones</h6>
                            <NavLink className='nav-link-btn' to='/earphones' onClick={toggleMobileNav}>
                               <p className=''>shop</p> 
                            </NavLink>
                       </li>
                    </ul>
                        
                </nav>

                
                    
            
                <Modal 
                    open={isModalActive}
                    onClose={modalOnClose}
                    >
                    <Cart/>
                </Modal>
            
            
        </div>
     );
}
 
export default Navigation;