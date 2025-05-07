import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const EventDetails = () => {
    const events = useLoaderData()
    const {Eventid} = useParams()
    // const [rating, setRating] = useState(3);
    const event = events.find(e => e.id===Eventid )
    // console.log(event);
     const {id, name, thumbnail, category, date, location, entry_fee, description} = event;

     const handleReservation =(e)=>{
          e.preventDefault()
          const name = e.target.name.value;
          console.log(name);
          toast.success(`${name} your reservation is successful!!`);
          
     }
    
    return (
        <div>
          <ToastContainer />
            <div className=" flex flex-col justify-center items-center gap-2 bg-base-100 w-11/12 shadow-sm overflow-hidden mx-auto p-4 rounded-2xl">
            {/* <Rating
      style={{ maxWidth: 180 }}
      value={rating}
      onChange={setRating}
    /> */}
  <figure className=" w-full overflow-hidden">
    <img 
      src={thumbnail}
      alt="Shoes"
      className="rounded-xl " />
  </figure>
  <div className=''>
  <div className='flex gap-4 pl-8'>
    <button className='btn text-[#09982F] rounded-2xl bg-linear-to-r from-[#80f1a0] to-[#ffff]'>Available</button>
    <button className='btn text-[#176AE5] rounded-2xl bg-linear-to-r from-[#bg-linear-to-r from-[#b3caec] to-[#ffff]] to-[#ffff]'>{date}</button>
  </div>
  <div className="flex flex-col items-start px-8 gap-4">
    <h2 className=" text-2xl font-bold">{name}</h2>
    
    <h2 className=" text-2xl font-bold">{category}</h2>

    <p className='text-gray-600'>{location}</p>
    
    <div className="w-full  pt-4 border-dashed border-t-1 border-gray-300 flex items-center gap-4">
    <p className='font-bold text-xl '>{description}</p>
   
    
    {/* <button className="btn text-lg border-[#176AE5] cursor-pointer p-5 w-full rounded-4xl text-[#176AE5] bg-transparent">View Details</button> */}
    </div>
    <div className='flex items-center gap-4'>
    <p className='font-bold text-xl '>Event Fee: </p>
    <p>USD : {entry_fee}$ (incl. Vat) Per consultation</p>
    </div>
    
  </div>
  </div>
  {/* //---------------------------- booking-------------------------- */}

          <div className="w-11/12 mx-auto p-8 space-y-3 ">
          <h1 className="text-2xl font-bold text-center">Reserve a seat</h1>
          <form onSubmit={handleReservation} noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-600">Username</label>
              <input type="text" required  name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">Email</label>
              <input  type="email" required name="email" id="password" placeholder="user Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
              <div className="flex justify-end text-xs dark:text-gray-600">
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Reserve Seat</button>
          </form>
          
        </div>
</div> 

        </div>

    );
};

export default EventDetails;