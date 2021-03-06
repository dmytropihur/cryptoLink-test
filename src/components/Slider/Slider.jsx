import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ChainItem } from '../ChainItem';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './Slider.module.scss';

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <ChainItem type="terra" text="Terra" />
      </SwiperSlide>
      <SwiperSlide>
        <ChainItem type="solana" text="Solana" />
      </SwiperSlide>
      <SwiperSlide>
        <ChainItem type="moon" text="MoonRiver" />
      </SwiperSlide>
      <SwiperSlide>
        <ChainItem type="avalanche" text="Avalanche" />
      </SwiperSlide>
    </Swiper>
  );
};
