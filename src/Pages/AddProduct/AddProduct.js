import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const navigate = useNavigate();

    const handleAddProduct = data => {
       console.log(data.image[0])
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        
                        img: imgData.data.url,
                        category_name: data.category_name,
                        product_name: data.product_name,
                        seller_name: data.seller_name,
                        original_price: data.original_price,
                        resale_price: data.resale_price,
                        use_time: data.use_time,
                        location: data.location



                     }

                    // save product information to the database
                     fetch('http://localhost:5000/addedproducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                             authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.product_name} is added successfully`);
                            navigate('/')
                        })

                }
         })

    }

    

    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)} >


                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Category Name</span></label>
                    <input type='text' {...register("category_name", {
                        required: "Category name is required"
                    })}
                        className='input input-bordered w-full max-w-xs' />
                    {errors.category_name && <p className='text-red-600'>{errors.category_name?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type='text' {...register("product_name", {
                        required: "product name is required"
                    })}
                        className='input input-bordered w-full max-w-xs' />
                    {errors.product_name && <p className='text-red-600'>{errors.product_name?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Seller Name</span></label>
                    <input type='seller_name' {...register("seller_name", {
                        required: "seller_name is required"
                    })}
                        className='input input-bordered w-full max-w-xs' />
                    {errors.seller_name && <p className='text-red-600'>{errors.seller_name?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Original price</span></label>
                    <input type='original_price' {...register("original_price", {
                        required: "original_price is required"
                    })}
                        className='input input-bordered w-full max-w-xs' />
                    {errors.original_price && <p className='text-red-600'>{errors.original_price?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Resale price</span></label>
                    <input type='resale_price' {...register("resale_price", {
                        required: "resale_price is required"
                    })}
                        className='input input-bordered w-full max-w-xs' />
                    {errors.resale_price && <p className='text-red-600'>{errors.resale_price?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Use Time</span></label>
                    <input type='use_time' {...register("use_time", {
                        required: "use_time is required"
                    })}
                        className='input input-bordered w-full max-w-xs' />
                    {errors.use_time && <p className='text-red-600'>{errors.use_time?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type='location' {...register("location", {
                        required: "use_time is required"
                    })}
                        className='input input-bordered w-full max-w-xs' />
                    {errors.location && <p className='text-red-600'>{errors.use_time?.message}</p>}

                </div>
                
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type='file' {...register("image", {
                        required: "photo is required"
                    })}
                        className='input input-bordered w-full max-w-xs' />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}

                </div>

                <input className='btn btn-accent w-full my-5' value='Add Product' type="submit" />
                {/* {signUpError && <p className='text-red-500'>{signUpError}</p>} */}
            </form>

        </div>
    );
};

export default AddProduct;