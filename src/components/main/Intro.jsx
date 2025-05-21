import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { useEffect, useState } from 'react';

const Intro = ({ sectionRefs, sequences, lineHeight, durationPerStep, animationEndTime }) => {
    /* 커서 */
    const [isHovered, setIsHovered] = useState(false);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [animationEnded, setAnimationEnded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationEnded(true);
        }, 6200);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseMove = (e) => {
        if (!animationEnded) return;
        setCursor({ x: e.clientX, y: e.clientY });
    };

    const animationFontStyle = 'text-[200px] leading-none font-bold text-center font-mono';

    return (
        <div
            ref={(el) => (sectionRefs.current['intro'] = el)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="intro bg-g20"
        >
            <AnimatePresence>
                {isHovered && animationEnded && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: cursor.x - 50, y: cursor.y - 50 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: cursor.x - 50,
                            y: cursor.y - 50,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="fixed z-20 bg-g900 text-g0 w-[180px] h-[180px] rounded-full centering pointer-events-none"
                        style={{ top: 0, left: 0 }}
                    >
                        Scroll Down
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="inner-intro flex flex-col justify-between h-screen">
                <div className="intro-title pt-[120px]">
                    <motion.div
                        initial={{ y: 40 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1,
                            delay: animationEndTime + 0.8,
                            ease: 'easeInOut',
                        }}
                        className="h-[200px] flex flex-row justify-center overflow-hidden mb-5"
                    >
                        {sequences.map((column, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 0 }}
                                animate={{
                                    y: -lineHeight * (column.length - 1),
                                }}
                                transition={{
                                    duration: durationPerStep * column.length,
                                    delay: 1 + i * durationPerStep,
                                    ease: 'easeInOut',
                                }}
                                className="flex flex-col"
                            >
                                {column.map((char, j) => (
                                    <span
                                        key={j}
                                        style={{
                                            height: `${lineHeight}px`,
                                        }}
                                        className={animationFontStyle}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </motion.div>
                        ))}
                        <motion.span
                            initial={{
                                y: lineHeight,
                                width: 0,
                            }}
                            animate={{
                                y: 0,
                                width: 'auto',
                            }}
                            transition={{
                                duration: 0.8,
                                delay: animationEndTime,
                                ease: 'easeInOut',
                            }}
                            className={animationFontStyle}
                        >
                            R
                        </motion.span>
                    </motion.div>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: animationEndTime + 0.8,
                            ease: 'easeInOut',
                        }}
                        className="text-center"
                    >
                        디자인 경력과 개발 효율을 갖춘 프론트엔드 개발자, 이송은입니다.
                        <br /> 디테일을 고민하고, 경험을 설계합니다.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: animationEndTime + 1,
                        ease: 'easeInOut',
                    }}
                    className="intro-info flex flex-col items-center gap-[10px]"
                >
                    <p>Lee Song Eun</p>
                    <div className="intro-info-wrap flex flex-row gap-6">
                        <div className="intro-info-tel flex flex-row gap-2">
                            <p>Tel.</p>
                            <p>010.7660.9251</p>
                        </div>
                        <div className="intro-info-mail flex flex-row gap-2">
                            <p>Mail.</p>
                            <p>thddms355@naver.com</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Intro;
