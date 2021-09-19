import { useState, useEffect } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import PageNav from '../pageNav/PageNav';
import About from '../about/About';
import Footer from '../footer/Footer';



const ProductPage = ({match}) => {

    const [productData, setProductData] = useState([]);
    const [quantityInput, setQuantityInput] = useState(1);

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    },[match])

  
    const getData = () => {
        fetch('../../data.json')
            .then(response =>response)
            .then(response => response.json())
            .then(data => {
                const product = data.filter(item => item.slug === match.params.product);
                
            
                setProductData(product)
                
            })
    }

    const increaseValue = () => {
        setQuantityInput(quantityInput + 1)
    }

    const decreaseValue = () => {
        
        if(quantityInput <= 1 ) {
            return
        } else {
            setQuantityInput(quantityInput - 1)
        }
    }

const displayProduct = productData.map(product => <div className='product-container' key={product.id}>
    <Link to={`/${product.category}`}>Go back</Link>
    
        <div className='product-container__wrapper'>
            <div className='product-container__img-container'>
                <picture>
                    <source media='(min-width: 1280px)' srcSet={product.image.desktop}/>
                    <source media='(min-width: 700px)' srcSet={product.image.tablet}/>
                    <source media='(min-width:360px)' srcSet={product.image.mobile}/>
                    <img src={product.image.mobile} alt={product.name}/>
                </picture>
                </div>

                <article 
                className='product-container__product-description'>
                    {product.new && <p className='overline '>new product</p>}
                    <h1 className='product-container__product-title'>
                        {product.name}
                    </h1>
                    <p className='product-container__product-text'>{product.description}</p>
                    <p className='product-container__product-price'>{`$ ${product.price.toLocaleString()}`}</p>
                    <div className='product-form'>
                        <div className='input-wrapper'>
                            <span onClick={decreaseValue} className='decrease-quantity'>-</span>
                            <span onClick={increaseValue} className='increase-quantity'>+</span>
                            <input 
                            value={quantityInput}
                            readOnly
                            />
                        </div>
                        <button className='link-btn-orange add-cart-btn'>add to cart</button>
                    </div>
                </article>
        </div>

        

        <article className='product-container__features features'>
            <h2 className='features-title'>FEATURES</h2>
            <p  className='features-text'style={{whiteSpace: 'pre-line'}}>{product.features}</p>
        </article>
        <article className='product-container__includes'>
            <h2>In the box</h2>
            <div className='product__includes-list'>
                {product.includes.map((item, index) => <div key={index}>
                    <p><span>{item.quantity}x</span> {item.item}</p>
                </div>)}
            </div>
        </article>
        <div className='product-container__gallery-container gallery-container'>
            <div className='gallery-container__flex-wrap'>
                <div className='gallery-container__first-img'>
                    <picture>
                        <source media={'(min-width: 1280px)'} srcSet={product.gallery.first.desktop}/>
                        <source media={'(min-width: 700px)'} srcSet={product.gallery.first.tablet}/>
                        <source media={'(min-width: 320px)'} srcSet={product.gallery.first.mobile}/>
                        <img src={product.gallery.first.mobile} alt='product.name'/>
                    </picture>
                </div>
                <div className='gallery-container_second-img'>
                    <picture>
                        <source media={'(min-width: 1280px)'} srcSet={product.gallery.second.desktop}/>
                        <source media={'(min-width: 700px)'} srcSet={product.gallery.second.tablet}/>
                        <source media={'(min-width: 320px)'} srcSet={product.gallery.second.mobile}/>
                        <img src={product.gallery.second.mobile} alt='product.name'/>
                    </picture>
                </div>
            </div>
            <div className='gallery-container__flex-wrap-last-img'>
                <div className='gallery-container__third-img'>
                <picture>
                        <source media={'(min-width: 1280px)'} srcSet={product.gallery.third.desktop}/>
                        <source media={'(min-width: 700px)'} srcSet={product.gallery.third.tablet}/>
                        <source media={'(min-width: 320px)'} srcSet={product.gallery.third.mobile}/>
                        <img src={product.gallery.third.mobile} alt='product.name'/>
                    </picture>
                </div>
            </div>
        </div>
        <article className='product-container__other-products other-products'>
            <h2>You may also like</h2>
            {product.others.map((item, index) => <div className='other-products__product-wrapper' key={index}>
                <div className='other-products__img-container'>
                    <picture>
                        <source media={'(min-width: 1280px)'} srcSet={item.image.desktop}/>
                        <source media={'(min-width: 700px)'} srcSet={item.image.tablet}/>
                        <source media={'(min-width: 320px)'} srcSet={item.image.mobile}/>
                        <img src={item.image.mobile} alt='product.name'/>
                    </picture>
                </div>
                <h3>{item.name}</h3>

                <Link className='link-btn-orange' to={`/category/${item.slug}`}>see product</Link>
                

            </div>)}
        </article>
    
   
   
</div>)
   

    return ( 
        <div>
            {displayProduct}
            <PageNav/>
            <About/>
            <Footer/>
        </div>
     );
}
 
export default ProductPage;