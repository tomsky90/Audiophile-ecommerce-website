import React from 'react';
import { Link } from 'react-router-dom';
import featuredSpeakerImgMobile from '../../assets/home/mobile/image-speaker-zx9.png';
import featuredSpeakerImgTablet from '../../assets/home/tablet/image-speaker-zx9.png';
import featuredSpeakerImgDesktop from '../../assets/home/desktop/image-speaker-zx9.png';
import bgcImage from '../../assets/home/desktop/pattern-circles.svg';
import featuredSecondSpeakerMobile from '../../assets/home/mobile/image-speaker-zx7.jpg';
import featuredSecondSpeakerTablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
import featuredSecondSpeakerDesktop from '../../assets/home/desktop/image-speaker-zx7.jpg';
import featuredThirdEarphonsMobile from '../../assets/home/mobile/image-earphones-yx1.jpg';
import featuredThirdEarphonsTablet from '../../assets/home/tablet/image-earphones-yx1.jpg';
import featuredThirdEarphonsDesktop from '../../assets/home/desktop/image-earphones-yx1.jpg';




const FeaturedProducts = () => {
    return ( 
        <div className='featured-items-wrapper'>
            <div className='featured-first'>
                <div className='bgc-img-container'>
                    <img src={bgcImage} alt="background Circles"/>
                </div>
                <div className='featured-first__img-container'>
                    <picture>
                        <source media="(min-width: 1280px)" srcSet={featuredSpeakerImgDesktop}/>
                        <source media="(min-width: 700px)" srcSet={featuredSpeakerImgTablet}/>
                        <source media="(min-width: 360px)" srcSet={featuredSpeakerImgMobile}/> 
                        <img src={featuredSpeakerImgMobile} alt="zx9 speakers"/>
                    </picture>
                </div>
                <div className='featured-first__text-container'>
                    <h2 className='featured-first__title'>zx9 <br/> Speaker</h2>
                    <p className='featured-first__description'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>

                    <Link className='link-btn-black' to='/category/zx9-speaker'>SEE product</Link>
                </div>
                
            </div>

            <div className='featured-second'>
                <div className="featured-second__img-container">
                    <picture>
                        <source media="(min-width: 1280px)" srcSet={featuredSecondSpeakerDesktop}/>
                        <source media="(min-width: 700px)" srcSet={featuredSecondSpeakerTablet}/>
                        <source media="(min-width: 360px)" srcSet={featuredSecondSpeakerMobile}/> 
                        <img src={featuredSecondSpeakerMobile} alt="zx7 speakers"/>
                    </picture>
                </div>
                <div className='featured-second__text'>
                    <h2 className="featured-second__title">
                        zx7 speaker
                    </h2>
                    <Link className='link-btn-transparent featured-second__link-btn' to='/category/zx7-speaker'>
                        SEE product
                    </Link>

                </div>
                

            </div>

            <div className='featured-third'>
                <div className='featured-third__img-container'>
                <picture>
                        <source media="(min-width: 1280px)" srcSet={featuredThirdEarphonsDesktop}/>
                        <source media="(min-width: 700px)" srcSet={featuredThirdEarphonsTablet}/>
                        <source media="(min-width: 360px)" srcSet={featuredThirdEarphonsMobile}/> 
                        <img src={featuredThirdEarphonsMobile} alt="earphons yx1"/>
                    </picture>
                    
                </div>
                    
                <div className='featured-third__text-container'>
                    <h2 className='featured-third__title'>
                        YX1 EARPHONES
                    </h2>
                    <Link className='link-btn-transparent featured-third__link-btn' to='/category/yx1-earphones'>
                        SEE product
                    </Link>
                </div>

            </div>
        </div>
     );
}
 
export default FeaturedProducts;