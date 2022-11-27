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
            <h2 className='text-center font-bold'>Product Categories:{productCategories.length}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6 '>
                {
                productCategories.map(category=><div
                key={category._id}
                category={category}

                >
                    <Link to={`/category/${category.category_id}`}>{category.category_name}</Link>
                </div>)

            }
            </div>
            
        </div>
    );
};

export default Categories;