import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const {data:productCategories=[]}=useQuery({
        queryKey: ['pCategories'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/pCategories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>Product Categories</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 '>
                {
                productCategories.map(category=><div
                key={category._id}
                category={category}

                >
                    <Link to={`/category/${category.category_id}`}><div className='grid gap-6 grid-cols-2 lg:grid-cols-4 mt-6 border-2 p-10 font-bold text-2xl  bg-teal-300 hover:bg-cyan-700  hover:text-white rounded-lg'>{category.category_name}</div></Link>
                </div>)

            }
            </div>
            
        </div>
    );
};

export default Categories;