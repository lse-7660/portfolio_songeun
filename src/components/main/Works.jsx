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
        <div
            ref={(el) =>
                (sectionRefs.current['projects'] = el)
            }
            className="projects inner-common bg-g900 relative"
        >
            <h3 className="text-heading-s font-bold mb-4 text-g0">
                Projects
            </h3>

            {/* Floating text */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        className="fixed z-50 text-g0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            top: 0,
                            left: 0,
                        }}
                    >
                        <motion.div
                            animate={{
                                x: cursor.x + 20,
                                y: cursor.y + 20,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="px-3 py-1 text-heading-xs bg-g900"
                        >
                            View Details
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Swiper
                slidesPerView={3.2}
                spaceBetween={24}
                className="mySwiper"
            >
                {worksData.map((item) => (
                    <SwiperSlide key={item.index}>
                        <div
                            className="aspect-[3/4] overflow-hidden relative"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() =>
                                setHovered(true)
                            }
                            onMouseLeave={() =>
                                setHovered(false)
                            }
                        >
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
