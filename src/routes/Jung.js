import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-coverflow";
import "swiper/components/pagination";
import "../css/swiper.css";

import Swipercore, {Navigation, EffectCoverflow} from "swiper";

function Jung(){
    Swipercore.use([Navigation,EffectCoverflow]);
  return (
    <Swiper 
      effect={'coverflow'}
      slidesPerView={'3'}
      loop={true}
      coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true
      }}
      pagination={true}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
    </Swiper>
  );
}

export default Jung;