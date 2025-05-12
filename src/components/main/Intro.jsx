import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Intro = () => {
    const startLetter = 'DESIGNER';
    const endLetter = 'DEVELOPER';

    const steps = 5; // 중간 단계 수
    const [sequences, setSequences] = useState([]);

    const generateLetterSequences = (
        start,
        end,
        steps = 5
    ) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const sequences = [];

        for (let i = 0; i < start.length; i++) {
            const sequence = [start[i]];
            for (let j = 0; j < steps; j++) {
                const randomChar =
                    alphabet[
                        Math.floor(
                            Math.random() * alphabet.length
                        )
                    ];
                sequence.push(randomChar);
            }
            sequence.push(end[i]);
            sequences.push(sequence);
        }

        return sequences;
    };
    console.log(sequences);

    useEffect(() => {
        const generated = generateLetterSequences(
            startLetter,
            endLetter,
            steps
        );
        setSequences(generated);
    }, []);

    const lineHeight = 240; // 글자 하나 높이(px)
    const durationPerStep = 0.2;

    return (
        <div className="intro bg-g20">
            <div className="inner-intro flex flex-col justify-between h-screen">
                <div className="intro-title">
                    <div className="centering h-[240px] overflow-hidden mb-5">
                        {sequences.map((column, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    y: `${
                                        lineHeight *
                                        (column.lenght - 1)
                                    }`,
                                }}
                                animate={{
                                    y: 0,
                                }}
                                transition={{
                                    duration:
                                        durationPerStep *
                                        column.length,
                                    delay: i * 0.2,
                                    ease: 'easeInOut',
                                }}
                                className="flex flex-col"
                            >
                                {column.map((char, j) => (
                                    <div
                                        key={j}
                                        style={{
                                            height: `${
                                                lineHeight *
                                                (column.lenght -
                                                    1)
                                            }px`,
                                        }}
                                        className="text-[240px] leading-none font-bold text-center"
                                    >
                                        {char}
                                    </div>
                                ))}
                            </motion.div>
                        ))}
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
