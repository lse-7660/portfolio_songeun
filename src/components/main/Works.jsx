import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import worksData from '../../assets/api/worksData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Works = ({ sectionRefs }) => {
    const [hovered, setHovered] = useState(false);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setCursor({ x: e.clientX, y: e.clientY });
    };

    return (
        <div ref={(el) => (sectionRefs.current['projects'] = el)} className="projects inner-common bg-g900 relative">
            <h3 className="text-heading-s font-bold mb-4 text-g0">Projects</h3>

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        className="fixed z-50 text-g0 pointer-events-none px-3 py-1 text-heading-xs bg-g900"
                        initial={{ opacity: 0, x: cursor.x + 20, y: cursor.y + 20 }}
                        animate={{ opacity: 1, x: cursor.x + 20, y: cursor.y + 20 }}
                        transition={{
                            duration: 0.3,
                        }}
                        exit={{ opacity: 0 }}
                        style={{
                            top: 0,
                            left: 0,
                        }}
                    >
                        View Details
                    </motion.div>
                )}
            </AnimatePresence>

            <Swiper slidesPerView={3.2} spaceBetween={24} className="mySwiper">
                {worksData.map((item) => (
                    <SwiperSlide key={item.index}>
                        <div
                            className="aspect-[3/4] overflow-hidden relative"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <Link to={`/works/${item.name}`}>
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
