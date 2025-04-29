import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import worksData from '../../assets/api/worksData';

const Works = () => {
    return (
        <div className="works inner-common bg-g900">
            <h3 className="text-heading-s font-bold text-g0">
                Works
            </h3>
            <Swiper
                slidesPerView={2.2}
                spaceBetween={24}
                className="mySwiper"
            >
                {worksData.map((item) => (
                    <SwiperSlide key={item.index}>
                        <div className="aspect-[3/4]">
                            <img
                                src={item.imgUrl}
                                alt={item.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Works;
