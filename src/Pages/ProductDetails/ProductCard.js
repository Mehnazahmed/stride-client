import React from 'react';

const ProductCard = ({product}) => {

    const{img,product_name,original_price,resale_price,seller_name,use_time,location}= product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
         <img src={img} alt={product_name} className="rounded-xl" />
        </figure>
    <div className="card-body items-center text-center">
         <h2 className="card-title">{product_name}</h2>
         <p className='font-bold'>Resale Price: {resale_price}</p>
         <p className='font-bold'>Using Time: {use_time}</p>
         <p className='font-bold'>Original Price: {original_price}</p>
         <p className='font-bold'>Seller Name: {seller_name}</p>
         <p className='font-bold'>Location: {location}</p>
         <div className="card-actions">
             <label
                        
              htmlFor="booking-modal"
            className="btn btn-primary text-white"
                       
            >Book Now
            </label>
    </div>
  </div>
</div>
    );
};

export default ProductCard;