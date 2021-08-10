import React from 'react';
import { Link } from 'react-router-dom';
import featuredSpeakerImg from '../../assets/home/mobile/image-speaker-zx9.png';
import bgcImage from '../../assets/home/desktop/pattern-circles.svg'
import featuredSecondSpeaker from '../../assets/home/mobile/image-speaker-zx7.jpg'
import featuredThirdEarphons from '../../assets/home/mobile/image-earphones-yx1.jpg'



const FeaturedProducts = () => {
    return ( 
        <div className='featured-items-wrapper'>
            <div className='featured-first'>
                <div className='bgc-img-container'>
                    <img src={bgcImage} alt="background Circles"/>
                </div>
                <div className='featured-first__img-container'>
                    <img src={featuredSpeakerImg} alt="speakers"/>
                </div>
                <h2 className='featured-first__title'>zx9 <br/> Speaker</h2>
                <p className='featured-first__description'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>

                <Link className='link-btn-black' to='/products/zx9-speaker'>SEE product</Link>
            </div>

            <div className='featured-second'>
                <div className="featured-second__img-container">
                    <img src={featuredSecondSpeaker} alt="speaker zx7"/>
                </div>
                <div className='featured-second__text'>
                    <h2 className="featured-second__title">
                        zx7 speaker
                    </h2>
                    <Link className='link-btn-transparent featured-second__link-btn' to='/products/zx7-speaker'>
                        SEE product
                    </Link>

                </div>
                

            </div>

            <div className='featured-third'>
                <div className='featured-third__img-container'>
                    <img src={featuredThirdEarphons} alt="earphons yx1"/>
                </div>
                    
                <div className='featured-third__text-container'>
                    <h2 className='featured-third__title'>
                        YX1 EARPHONES
                    </h2>
                    <Link className='link-btn-transparent featured-third__link-btn' to='/products/YX1-EARPHONES'>
                        SEE product
                    </Link>
                </div>

            </div>
        </div>
     );
}
 
export default FeaturedProducts;