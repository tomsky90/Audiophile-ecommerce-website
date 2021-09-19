import React from 'react';
import { Link } from 'react-router-dom';

import PageNav from '../pageNav/PageNav';
import FeaturedProducts from '../featuredProducts/FeaturedProducts'
import About from '../about/About';
import Footer from '../footer/Footer';


import headerImgMobile from '../../assets/home/mobile/image-header.jpg';
import headerImgTablet from '../../assets/home/tablet/image-header.jpg';
import headerImgDesktop from '../../assets/home/desktop/image-hero.jpg';



 const Home = () => {
     return ( 
         <div>
             
             <div className='fetured-headphones-wrapper'>
             <div className='fetured-headphones-img-container'>

                 <picture>
                     <source media="(min-width: 1280px)" srcSet={headerImgDesktop}/>
                     <source media="(min-width: 700px)" srcSet={headerImgTablet}/>
                     <source media="(min-width: 320px)" srcSet={headerImgMobile}/>
                     <img src={headerImgMobile} alt="XX99 Mark II HeadphoneS"/>
                 </picture>
             </div>
             <div className='fetured-headphones-description'>
                 <p className='fetured-hedphones__overline overline'>new product</p>
                 <h4 className='fetured-hedphones__title'>XX99 Mark II HeadphoneS</h4>
                 <p className='fetured-hedphones__sub-title'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                 <Link className='link-btn-orange hearo-btn' to='/category/xx99-mark-two-headphones'>SEE PRODUCT</Link>
             </div>

             <PageNav/>
             <FeaturedProducts/>
             <About/>
             <Footer/>

             </div>
             
             

         </div>
      );
 }
  
 export default Home;