import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({product}) => {
    const{img,product_name,resale_price,seller_name,location}= product;
    
    const { user } = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3,4,5].map((value,i)=>console.log(value))
        const booking = {
            
            name: name,
            product:product_name,
            email,
            phone,
            price:resale_price

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    
                    toast.success('Booking confirmed')
                    
                }
                else {
                    toast.error(data.message)
                }

            })
    }

    return (
        <div>
            <>

        <input type="checkbox" id="booking-modal" className="modal-toggle" />
       <div className="modal">
         <div className="modal-box relative">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold"></h3>
        <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-3 mt-6'>
            <h2 className="text-lg font-bold read-only">{product_name}</h2>
            
            <input  type="text" defaultValue={resale_price}  className="input w-full input-bordered " disabled />
           
            <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered " disabled />
            <input name='email' defaultValue={user?.email} type="email" placeholder="Email" className="input w-full input-bordered " readOnly />
            <input name='phone' type="phone" placeholder="Phone number" className="input w-full input-bordered " />
            <input name='location' type="location" placeholder="your location" className="input w-full input-bordered " />

            <br />
            <input className='btn btn-accent w-full' type="submit" value="submit"></input>

        </form>
    </div>
</div>

</>

            
        </div>
    );
};

export default BookingModal;