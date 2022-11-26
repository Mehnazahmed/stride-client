import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const ProductDetails = () => {
    const productCategories = useLoaderData();
    console.log(productCategories)
    
    return (
       <section>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
            {
                productCategories.map(product=><ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
        {
            <BookingModal></BookingModal>
        }
       </section>
    );
};

export default ProductDetails;