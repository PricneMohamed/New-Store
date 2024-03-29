import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import '../styles/slider.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={require("../img/Home/Slider/wallpaperflare.com_wallpaper (1).jpg")} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require("../img/Home/Slider/wallpaperflare.com_wallpaper (2).jpg")} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require("../img/Home/Slider/wallpaperflare.com_wallpaper (3).jpg")} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={require("../img/Home/Slider/wallpaperflare.com_wallpaper (4).jpg")} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
