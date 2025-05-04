import React from 'react';
import { NavLink, useParams } from 'react-router';

const Event = ({event}) => {
    const {id, name, thumbnail, category, date, location, entry_fee, description} = event;
  
    
    return (
        
        <div className=''>
         
    <div className="card flex gap-3 h-full bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={thumbnail}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className='flex gap-3 pl-8'>
    <p className='text-red-400 font-bold'>Entry Fees: {entry_fee}$</p>
  </div>
  <div className="flex flex-col items-start px-8 gap-2">
    <h2 className=" text-2xl font-bold">{name}</h2>
    <p className='text-gray-600'>{category}</p>
    <div className='flex justify-start items-center gap-2 border-dashed border-t-1 border-gray-300 w-full py-2'>
    <div className="w-4 h-4 flex items-center justify-center rounded-full  text-black text-xs border">
  R
</div>
        <p className='text-gray-600'>{date}</p>
    </div>
    <div className="w-full pb-6">
      <NavLink to={`../eventDetails/${id}`}> <button className="btn text-lg border-[#176AE5] cursor-pointer p-5 w-full rounded-4xl text-[#176AE5] bg-transparent">View Details</button></NavLink>
   
    </div>
  </div>
</div>  
       
        </div>
    );
};

export default Event;