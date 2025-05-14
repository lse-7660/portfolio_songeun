import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import worksData from '../../assets/api/worksData';
import { Link } from 'react-router-dom';

const Works = ({ sectionRefs }) => {
    return (
        <div
            ref={(el) =>
                (sectionRefs.current['projects'] = el)
            }
            className="projects inner-common bg-g900"
        >
            <h3 className="text-heading-s font-bold mb-4 text-g0">
                Projects
            </h3>
            <Swiper
                slidesPerView={3.2}
                spaceBetween={24}
                className="mySwiper"
            >
                {worksData.map((item) => (
                    <SwiperSlide key={item.index}>
                        <div className="aspect-[3/4] overflow-hidden">
                            <Link
                                to={`/works/${item.name}`}
                            >
                                <img
                                    src={item.imgUrl}
                                    alt={item.name}
                                    className="h-full w-full object-cover transition-all duration-300 hover:scale-110"
                                />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Works;
