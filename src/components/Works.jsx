import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const worksData = [
    {
        name: 'Diptyque',
        desc: '향수 브랜드 Diptyque 사이트 개편 프로젝트',
        imgUrl: '/works/diptyque.png',
        url: 'https://diptyque.vercel.app/',
    },
    {
        name: 'Bokjak',
        desc: 'OTT 제작 프로젝트',
        imgUrl: '/works/bokjak.png',
        url: 'https://bokjak.netlify.app/',
    },
    {
        name: 'Opensurvey',
        desc: '리서치 플랫폼인 오픈서베이 사이트 개편 프로젝트',
        imgUrl: '/works/opensurvey.png',
        url: 'https://lse-7660.github.io/opensurvey/pages/',
    },
];

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
