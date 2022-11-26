import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductDetails = () => {
    const productCategories = useLoaderData();
    console.log(productCategories)
    const{img,product_name,original_price,resale_price,seller_name,use_time,location}= productCategories;
    return (
        <div>
            {
                productCategories.map(product=><ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default ProductDetails;