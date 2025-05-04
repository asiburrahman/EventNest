import React from 'react';
import Slider from '../Slider/Slider';
import { useLoaderData } from 'react-router';

const Home = () => {
    const events = useLoaderData()
    console.log(events);
    
    return (
        
        <div>
            <Slider></Slider>
        </div>
    );
};

export default Home;