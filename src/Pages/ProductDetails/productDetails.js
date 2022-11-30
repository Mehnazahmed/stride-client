import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewAddedProducts from '../NewAddedProducts/NewAddedProducts';
import BookingModal from './BookingModal';
import ProductCard from './ProductCard';

const ProductDetails = () => {
    const productCategories = useLoaderData();
    console.log(productCategories)
    
    return (
       <div>
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
            productCategories.map(product=><BookingModal
            
                    key={product._id}
                    product={product}
                    
            ></BookingModal>)
        }
       </section>
        <div>
            <h2 className='text-xl font-bold text-center mt-5 p-5'>Newly Added Products</h2>
            <NewAddedProducts></NewAddedProducts>
        </div>
       </div>
       
    );
};

export default ProductDetails;