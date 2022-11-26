import React from 'react';

const BookingModal = () => {
    return (
        <div>
            <>

        <input type="checkbox" id="booking-modal" className="modal-toggle" />
       <div className="modal">
         <div className="modal-box relative">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold"></h3>
        <form  className='grid grid-cols-1 gap-3 mt-6'>
            <input type="text"  className="input w-full input-bordered " disabled />
           
            <input name='name' type="text"  placeholder="Your Name" className="input w-full input-bordered " disabled />
            <input name='email'  type="email" placeholder="Email" className="input w-full input-bordered " readOnly />
            <input name='phone' type="phone" placeholder="Phone number" className="input w-full input-bordered " />

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