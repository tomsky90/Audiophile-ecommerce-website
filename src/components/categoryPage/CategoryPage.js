import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

import PageNav from '../pageNav/PageNav';
import About from '../about/About';
import Footer from '../footer/Footer';

import './categoryPage.scss'

const CategoryPage = ({match}) => {
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        getCategory()
    }, [match.params.category])

    const getCategory = () => {
        fetch('data.json')
            .then(response => response)
            .then(response => response.json())
            .then(data => {
                const categoryList = data.filter(item => item.category === match.params.category).reverse();
                
                setCategoryItems(categoryList)
                
            })
    }

    const itemsList = categoryItems.map(item => 
        <article className='product' key={item.id}>
            <div className='product-img-container'>
                <picture>
                     <source media="(min-width: 1280px)" srcSet={item.image.desktop}/>
                     <source media="(min-width: 700px)" srcSet={item.image.mobile}/>
                     <source media="(min-width: 320px)" srcSet={item.image.mobile}/>
                     <img src={item.image.mobile} alt={item.name}/>
                </picture>
                
            </div>
            <div className='product-text-container'>
                {item.new && <p className='overline '>new product</p>}
                <h1>{item.name}</h1>
                <p className='product-description'>{item.description}</p>
                <Link className='link-btn-orange' to='product'> see product</Link>
            
            </div>
            
        </article>
        
        
        )
    
    return (
        <div>
            <div className='category-title'>
                <h1>{match.params.category}</h1>
            </div>
            {itemsList}
            <PageNav/>
            <About/>
            <Footer/>

        </div>
    );
}

export default CategoryPage;