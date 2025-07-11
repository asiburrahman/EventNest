import React from 'react';
import Slider from '../Slider/Slider';
import { useLoaderData } from 'react-router';
import Event from '../Pages/Event';
import { ToastContainer } from 'react-toastify';
import TrustedCompanies from '../Pages/TrustedCompanies';
import CountUp from 'react-countup';


const Home = () => {
   
    const events = useLoaderData()
    // console.log(events);
    
    return (
        
        <div className='w-11/12 mx-auto'>
            <ToastContainer />

            
            <Slider>
            
            </Slider>

            <h2 className="text-2xl lg:text-4xl font-bold py-3 text-center">
    Upcoming Event</h2>
    
            <div className='grid justify-items-stretch  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                events.map(event=> <Event key={event.id} event={event}></Event>)
            }
            </div>

            <section>
            <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative space-y-4">
          <div className=" rounded-xl overflow-hidden shadow-xl">
            <img
              src="./5.jpg"
              alt="Check-in device"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-1 lg:flex gap-2 lg:space-x-4">
            <div className="  overflow-hidden shadow-xl flex-1 ">
            <img
                src="./7.jpg"
                alt="Event badge pickup"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="  overflow-hidden shadow-xl flex-1">
              <img
                src="./6.jpg"
                alt="Event badge pickup"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Your all-in-one solution for every event
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-semibold text-blue-700"><CountUp duration={10} end={7000} />+</h3>
              <p className="text-gray-600 text-sm">events managed</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700"><CountUp duration={10} end={250000} />+</h3>
              <p className="text-gray-600 text-sm">registrations processed</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700"><CountUp duration={10} end={1000} />+</h3>
              <p className="text-gray-600 text-sm">5-star ratings on G2</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-700"><CountUp duration={10} end={24} />/ <CountUp duration={10} end={7} /></h3>
              <p className="text-gray-600 text-sm">customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
            </section>


            <section>
                <TrustedCompanies></TrustedCompanies>
            </section>
           
        </div>
    );
};

export default Home;