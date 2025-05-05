import React from 'react';
import Slider from '../Slider/Slider';
import { useLoaderData } from 'react-router';
import Event from '../Pages/Event';
import { ToastContainer } from 'react-toastify';


const Home = () => {
   
    const events = useLoaderData()
    // console.log(events);
    
    return (
        
        <div className='w-11/12 mx-auto'>
            <ToastContainer />
            <Slider></Slider>

            <h2 class="text-2xl lg:text-4xl font-bold py-3 text-center">
    Upcoming Event</h2>
    
            <div className='grid justify-items-stretch  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                events.map(event=> <Event event={event}></Event>)
            }
            </div>
           
        </div>
    );
};

export default Home;