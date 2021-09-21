import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/shared/desktop/logo.svg'; 
import facebookIcon from '../../assets/shared/desktop/icon-facebook.svg';
import twitterIcon from '../../assets/shared/desktop/icon-twitter.svg';
import instagramIcon from '../../assets/shared/desktop/icon-instagram.svg';





const Footer = () => {

    const srcollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (  
        <footer className='footer'>
            <div className='footer-decoration'></div>
            <div className='footer__logo-container'>
                <Link onClick={srcollToTop} to='/'>
                    <img src={logoImg} alt="logo"/>
                </Link>
                
            </div>
            <ul className='footer-nav'>
                <li className="footer-nav__link">
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li className="footer-nav__link">
                    <Link to='/headphones'>
                        headphones
                    </Link>
                </li>
                <li className="footer-nav__link">
                    <Link to='/speakers'>
                        speakers
                    </Link>
                </li>
                <li className="footer-nav__link">
                    <Link to='/earphones'>
                        earphones
                    </Link>
                </li>
            </ul>

            <div className='footer__text-wrapper'>
                <p className='footer__text'>
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
            </div>

            <div className='footer__copyright-wrapper'>
                <p className='footer__copyright'>Copyright 2021. All Rights Reserved</p>
            </div>

            <div className='footer__social-wrapper'>
                <a className='footer__social-link' href='https://en-gb.facebook.com/'>
                    <img src={facebookIcon} alt="facebook icon"/>
                </a>
                <a className='footer__social-link' href='https://twitter.com/?lang=en-gb'>
                    <img src={twitterIcon} alt="twitter icon"/>
                </a>
                <a className='footer__social-link' href='https://www.instagram.com/'>
                    <img src={instagramIcon} alt="instagram icon"/>
                </a>
            </div>

        </footer>
     );
}
 
export default Footer;