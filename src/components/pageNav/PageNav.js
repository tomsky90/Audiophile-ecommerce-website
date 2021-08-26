import React from 'react';
import { Link } from 'react-router-dom'

import headphons from '../../assets/shared/desktop/image-headphones.png';
import speakers from '../../assets/shared/desktop/image-speakers.png';
import earphones from '../../assets/shared/desktop/image-earphones.png';


const PageNav = () => {
    return ( <div>
        <nav className='page-nav'>
            
            <ul className='page-nav__list'>
                 <li className='page-nav__link-container'>
                   <img src={`${headphons}`} alt=" headphones"/>
                   <h6 className='page-nav__title'>headphons</h6>
                    <Link className='nav-link-btn' to='/headphones'>
                       <p className=''>shop</p> 
                    </Link>
               </li>
               <li className='page-nav__link-container'>
                   <img src={`${speakers}`} alt="speakers"/>
                   <h6 className='page-nav__title'>speakers</h6>
                    <Link className='nav-link-btn' to='/speakers'>
                       <p className=''>shop</p> 
                    </Link>
               </li>
               <li className='page-nav__link-container'>
                   <img src={`${earphones}`} alt="earphones"/>
                   <h6 className='page-nav__title'>earphones</h6>
                    <Link className='nav-link-btn' to='/earphones'>
                       <p className=''>shop</p> 
                    </Link>
               </li>
            </ul>
                
        </nav>
    </div> );
}
 
export default PageNav;