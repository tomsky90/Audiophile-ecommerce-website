import React from 'react';
import { Link } from 'react-router-dom';

import PageNav from '../pageNav/PageNav'
import FeaturedProducts from '../featuredProducts/FeaturedProducts'


import headerImg from '../../assets/home/mobile/image-header.jpg'


 const Home = () => {
     return ( 
         <div>
             
             <div className='fetured-headphones-wrapper'>
             <div className='fetured-headphones-img-container'>
                 <img src={`${headerImg}`} alt="XX99 Mark II HeadphoneS"/>
             </div>
             <div className='fetured-headphones-description'>
                 <p className='fetured-hedphones__overline overline'>new product</p>
                 <h4 className='fetured-hedphones__title'>XX99 Mark II HeadphoneS</h4>
                 <p className='fetured-hedphones__sub-title'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                 <Link className='link-btn-orange' to='/products/XX99 Mark II HeadphoneS'>SEE PRODUCT</Link>
             </div>

             <PageNav/>
             <FeaturedProducts/>

             </div>
             
             

         </div>
      );
 }
  
 export default Home;