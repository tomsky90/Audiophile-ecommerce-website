import React from 'react';

import aboutMobileImg from '../../assets/shared/mobile/image-best-gear.jpg'

const About = () => {
    return ( 
        <section className='about'>
            <div className='about__img-container'>
                <img src={aboutMobileImg} alt=""/>
            </div>
            <div className='about__text-wrapper'>
                <h1 className='about__title'>Bringing you the <span>best</span> audio gear</h1>
                <p className='about__description'>
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
        </section>
     );
}
 
export default About;