import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import hamburgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';
import logo from '../../assets/shared/desktop/logo.svg';
import cartIcon from '../../assets/shared/desktop/icon-cart.svg';
import headphons from '../../assets/shared/desktop/image-headphones.png';
import speakers from '../../assets/shared/desktop/image-speakers.png';
import earphones from '../../assets/shared/desktop/image-earphones.png';

// import '../../styles/nav.scss'

const Navigation = () => {

    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    const toggleMobileNav =  () => {
        setIsMobileNavActive(!isMobileNavActive)
    }


    return ( 
        <div>
            <div className={isMobileNavActive ? 'blure blure--active' : 'blure'}></div>
            <header className='header'>
                    <div className='mobile-nav__hamburger-icon-container'>
                        <img onClick={toggleMobileNav}  className='mobile-nav__hamburger-icon' 
                            src={`${hamburgerIcon}` }
                            alt='menu icon'/>
                    </div>
                
                <div className='logo-container'>
                    <img src={`${logo}`} alt="logo"/>
                </div>
                <div className='cart-icon__container'>
                    <img src={`${cartIcon}`} alt="cart icon"/>
                </div>
                
            </header>
            
            
                    
                <nav className={isMobileNavActive ? 'mobile-nav mobile-nav--active' : 'mobile-nav'}>
            
                    <ul>
                         <li className='mobile-nav__link-container'>
                           <img src={`${headphons}`} alt=" headphones"/>
                           <h6 className='mobile-nav__title'>headphons</h6>
                            <NavLink className='nav-link-btn' to='/headphones'>
                               <p className=''>shop</p> 
                            </NavLink>
                       </li>
                       <li className='mobile-nav__link-container'>
                           <img src={`${speakers}`} alt="speakers"/>
                           <h6 className='mobile-nav__title'>speakers</h6>
                            <NavLink className='nav-link-btn' to='/speakers'>
                               <p className=''>shop</p> 
                            </NavLink>
                       </li>
                       <li className='mobile-nav__link-container'>
                           <img src={`${earphones}`} alt="earphones"/>
                           <h6 className='mobile-nav__title'>earphones</h6>
                            <NavLink className='nav-link-btn' to='/earphones'>
                               <p className=''>shop</p> 
                            </NavLink>
                       </li>
                    </ul>
                        
                </nav>
                    
            
            
           
            
            
        </div>
     );
}
 
export default Navigation;