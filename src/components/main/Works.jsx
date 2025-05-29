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
                        className="fixed z-50 text-g0 pointer-events-none px-3 py-1 centering text-heading-xs bg-g900"
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
                        <span className="mr-2">View Details</span>
                        <span class="material-symbols-outlined">arrow_outward</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {worksData.map((item) => (
                <div key={item.index} className="sticky top-0">
                    <div
                        className="w-full h-screen"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <Link to={`/works/${item.name}`}>
                            <div className="relative h-full overflow-hidden">
                                <img
                                    src={item.imgUrl}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                                />

                                <div className="absolute top-0 left-0 w-full h-full p-10 pointer-events-none">
                                    <p className="text-g0 font-kenoky text-display-s">{item.name}</p>
                                    <div className="h-[1px] bg-g0 my-5"></div>
                                    <div className="flex flex-col absolute top-1/2 right-10">
                                        <span className="text-g0 text-right">{item.date}</span>
                                        <span className="text-g0 text-right">{item.desc}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Works;
