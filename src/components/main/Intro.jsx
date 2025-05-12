import { motion } from 'framer-motion';

const Intro = () => {
    const sequences = [
        ['D', 'A', 'F', 'R', 'T', 'D'],
        ['E', 'I', 'Z', 'V', 'A', 'E'],
        ['S', 'R', 'A', 'B', 'J', 'V'],
        ['I', 'A', 'F', 'R', 'T', 'E'],
        ['G', 'I', 'Z', 'V', 'A', 'L'],
        ['N', 'R', 'A', 'B', 'D', 'O'],
        ['E', 'Y', 'N', 'X', 'E', 'P'],
        ['R', 'L', 'C', 'F', 'A', 'E'],
    ];

    const lineHeight = 200; // 글자 하나 높이(px)
    const durationPerStep = 0.2;
    const animationEndTime = Math.max(
        ...sequences.map(
            (column, i) =>
                1 +
                i * durationPerStep +
                column.length * durationPerStep +
                0.2
        )
    );

    const animationFontStyle =
        'text-[200px] leading-none font-bold text-center font-mono';

    return (
        <div className="intro bg-g20">
            <div className="inner-intro flex flex-col justify-between h-screen">
                <div className="intro-title">
                    <div className="h-[200px] flex flex-row justify-center overflow-hidden mb-5">
                        {sequences.map((column, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 0 }}
                                animate={{
                                    y:
                                        -lineHeight *
                                        (column.length - 1),
                                }}
                                transition={{
                                    duration:
                                        durationPerStep *
                                        column.length,
                                    delay:
                                        1 +
                                        i * durationPerStep,
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
                                        className={
                                            animationFontStyle
                                        }
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
                                duration: 0.5,
                                delay: animationEndTime,
                                ease: 'easeInOut',
                            }}
                            className={animationFontStyle}
                        >
                            R
                        </motion.span>
                    </div>

                    <p className="text-center">
                        디자인 경력과 개발 효율을 갖춘
                        프론트엔드 개발자, 이송은입니다.
                        <br /> 디테일을 고민하고, 경험을
                        설계합니다.
                    </p>
                </div>
                <div className="intro-info flex flex-col items-center gap-[10px]">
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
                </div>
            </div>
        </div>
    );
};

export default Intro;
