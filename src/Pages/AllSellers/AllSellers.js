import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const {data: sellers=[], refetch}=useQuery({
        queryKey: ['sellers'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    })

    
    return (
        <div>
            
            <table className="table w-full">
    
    <thead>
      <tr>
        <th><h2 className='text-3xl text-center'>All Sellers</h2></th>
        
      </tr>
    </thead>
    <tbody>
    <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        sellers.map((seller,i)=> <tr key={seller._id }>
        <th>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td>{seller.role}</td>
        
        <td><button className='btn btn-xs btn-danger'>Delete</button></td>
      </tr>)
      }
      
    </tbody>
  </table>
      
    </tbody>
  </table>
        </div>
    );
};

export default AllSellers;