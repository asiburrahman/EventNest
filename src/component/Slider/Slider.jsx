import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';



import { Autoplay } from 'swiper/modules';




import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Slider = () => {
  const Slider1 = <>
  <div class="flex flex-col justify-center lg:flex-row items-center p-12 lg:p-24">

<div class=" flex-1">

  <h2 class="text-2xl lg:text-4xl font-bold py-1">
  Tech Innovators <br /> Conference 2025
  </h2>
  <p className='w-11/12'>
  The Tech Innovators Conference 2025 is a landmark event bringing together the brightest minds in technology, entrepreneurship, and innovation. Held at the Dhaka Convention Center, this immersive conference will feature keynote speeches from global tech leaders, interactive panel discussions.
  </p>
  <button class="btn my-4 ">Book Now</button>
</div>

<div class="flex-1 rounded">
  <img className='rounded-xl' src="./Movie.jpg"  />
</div>
</div>


</>

const Slider3 = <>
  <div class="flex flex-col justify-center lg:flex-row items-center p-12 lg:p-24">

<div class=" flex-1">

  <h2 class="text-2xl lg:text-4xl font-bold py-1">
  Startup Founders Meetup
  </h2>
  <p className='w-11/12'>
  The Tech Innovators Conference 2025 is a landmark event bringing together the brightest minds in technology, entrepreneurship, and innovation. Held at the Dhaka Convention Center, this immersive conference will feature keynote speeches from global tech leaders, interactive panel discussions.
  </p>
  <button class="btn my-4 ">Book Now</button>
</div>

<div class="flex-1 rounded">
  <img className='rounded-xl' src="./Consert.jpg"  />
</div>
</div>


</>

const Slider2 = <>
  <div class="flex flex-col justify-center lg:flex-row items-center p-12 lg:p-24">

<div class=" flex-1">

  <h2 class="text-2xl lg:text-4xl font-bold py-1">
  Local Food Festival
  </h2>
  <p className='w-11/12'>
  The Local Food Festival is a culinary celebration designed to bring together food lovers, chefs, and local producers for a weekend of flavor, culture, and community. Held at the green and lively Ramna Park, the festival showcases a rich variety of traditional Bangladeshi dishes alongside contemporary twists from rising culinary talents. .
  </p>
  <button class="btn my-4 ">Book Now</button>
</div>

<div class="flex-1 rounded">
  <img className='rounded-xl' src="./Drinks.jpg"  />
</div>
</div>


</>

    return (
        <Swiper 
        
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        loop={true}
          


      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      // onSwiper={(swiper) => }
      // onSlideChange={() => console.log('slide change')}

      
    >
      <SwiperSlide >{Slider1}</SwiperSlide>
      <SwiperSlide>{Slider2}</SwiperSlide>
      <SwiperSlide>{Slider3}</SwiperSlide>
    </Swiper>
    );
};

export default Slider;