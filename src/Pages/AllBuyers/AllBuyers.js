import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const {data: buyers=[], refetch}=useQuery({
        queryKey: ['buyers'],
        queryFn: async()=>{
            const res = await fetch('https://y-orpin-psi.vercel.app/buyers');
            const data = await res.json();
            return data;
        }
    })

    
    return (
        <div>
            
            <table className="table w-full">
    
    <thead>
      <tr>
        <th><h2 className='text-3xl text-center'>All Buyers</h2></th>
        
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
        buyers.map((buyer,i)=> <tr key={buyer._id }>
        <th>{i+1}</th>
        <td>{buyer.name}</td>
        <td>{buyer.email}</td>
        <td>{buyer.role}</td>
        
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

export default AllBuyers;