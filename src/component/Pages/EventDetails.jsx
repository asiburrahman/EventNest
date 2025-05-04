import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const EventDetails = () => {
    const events = useLoaderData()
    const {Eventid} = useParams()
    const event = events.find(e => e.id===Eventid )
    console.log(event);
     const {id, name, thumbnail, category, date, location, entry_fee, description} = event;
    
    return (
        <div>
            <div className=" flex flex-col justify-center items-center gap-2 bg-base-100 w-11/12 shadow-sm overflow-hidden mx-auto p-4 rounded-2xl">
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
    <h2 className=" text-gray-600">Working at</h2>
    <h2 className=" text-2xl font-bold">{category}</h2>

    <p className='text-gray-600'>{location}</p>
    <div className='flex justify-start items-center gap-2 border-dashed border-t-1 border-gray-300 w-full py-2'>
    <div className="w-4 h-4 flex items-center justify-center rounded-full  text-black text-xs border">
  R
</div>
        <p className='text-gray-600 '>{entry_fee}</p>
    </div>
    <div className="w-full  pt-4 border-dashed border-t-1 border-gray-300 flex items-center gap-4">
    <p className='font-bold text-xl '>{description}</p>
   
    
    {/* <button className="btn text-lg border-[#176AE5] cursor-pointer p-5 w-full rounded-4xl text-[#176AE5] bg-transparent">View Details</button> */}
    </div>
    <div className='flex items-center gap-4'>
    <p className='font-bold text-xl '>Availability: </p>
    <p>Taka : {entry_fee} BDT (incl. Vat) Per consultation</p>
    </div>
  </div>
  </div>
</div> 
        </div>

    );
};

export default EventDetails;