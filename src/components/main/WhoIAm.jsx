import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const whoIAmImg = [
    {
        name: 'clean',
        url: '/WhoIAm/CLEAN.svg',
        className: 'top-[20px]',
    },
    {
        name: 'intuitive',
        url: '/WhoIAm/INTUITIVE.svg',
        className: 'top-[140px]',
    },
    {
        name: 'efficient',
        url: '/WhoIAm/EFFICIENT.svg',
        className: 'top-[260px]',
    },
    {
        name: 'maintain',
        url: '/WhoIAm/MAINTAIN.svg',
        className: 'top-[380px]',
    },
    {
        name: 'front-end',
        url: '/WhoIAm/FRONT-END.svg',
        className: 'top-[500px]',
    },
];

const WhoIAm = ({ sectionRefs }) => {
    const getRandomPosition = (yRange, maxX = 860) => {
        return {
            x: Math.random() * maxX,
            y: yRange.min + Math.random() * (yRange.max - yRange.min),
        };
    };

    // 원 하나를 담당하는 컴포넌트
    const WaveCircle = ({ delay = 0, yRange, className }) => {
        const [position, setPosition] = useState(getRandomPosition(yRange));

        useEffect(() => {
            const interval = setInterval(() => {
                setPosition(getRandomPosition(yRange));
            }, 3000 + delay);
            return () => clearInterval(interval);
        }, [delay, yRange]);

        return (
            <motion.div
                className={`absolute w-[300px] h-[300px] rounded-full bg-g0 ${className}`}
                animate={{ x: position.x, y: position.y }}
                transition={{
                    duration: 3,
                    ease: 'easeInOut',
                }}
            />
        );
    };

    //letter spacing
    const LetterSpacing = ({ width = 36, duration = 0.8, delay = 0.2 }) => (
        <motion.span
            initial={{ width: 0 }}
            whileInView={{ width }}
            transition={{ duration, delay }}
            className="inline-block h-[2px]"
        />
    );

    //growing box
    const LineBox = ({ scale, delay }) => (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale }}
            transition={{ duration: 0.3, delay }}
            style={{ transformOrigin: 'center', width: 860, height: 600 }}
            className="border border-g0 absolute top-0 left-0 z-10"
        />
    );

    //그래픽 가로 스크롤
    const wrapperRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ['start start', 'center center'],
    });

    const leftWidth = useTransform(scrollYProgress, [0, 1], [860, 0]);

    const rightWidth = useTransform(scrollYProgress, [0, 1], [0, 860]);

    return (
        <div
            ref={(el) => (sectionRefs.current['who-i-am'] = el)}
            className="who-i-am inner-common flex flex-col items-center bg-g900"
        >
            <h3 className="text-g0 mb-6 centering font-bold">Who I Am</h3>
            <p className="text-[3.2vw]/[120%] mb-5 font-bold text-g0">
                FROM <LetterSpacing /> DESIGN <LetterSpacing />
                TO <LetterSpacing /> DEVELOPMENT, <br />I CREATE INTUITIVE AND EFFICIENT <LetterSpacing width={30} />
                USER EXPERIENCES {''}
                <motion.span
                    initial={{ letterSpacing: '-1.5px' }}
                    whileInView={{ letterSpacing: '-0.8px' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    THROUGH CLEAN AND MAINTAINABLE FRONT-END CODE.
                </motion.span>
            </p>

            <p className="text-body-m w-[860px] mx-auto text-g0 mb-10">
                디자인부터 개발까지의 전 과정을 아우르며, 사용자 중심의 직관적이고 효율적인 경험을 만들어내는 프론트엔드
                개발자입니다. UI/UX에 대한 깊은 이해를 바탕으로, 사용자에게 명확하고 일관된 인터페이스를 제공하고자
                노력하며, 이를 실현하기 위해 깔끔하고 유지 보수가 용이한 코드를 작성하는 것을 중요하게 생각합니다.
                사용자와 개발자 모두가 만족할 수 있는 결과물을 만들기 위해 세심한 설계와 끊임없는 개선을 추구합니다.
            </p>
            <div ref={wrapperRef} className="whoiam-graphic-wrap h-[1720px]">
                <div className="sticky top-[140px] flex flex-row">
                    <motion.div
                        style={{ width: leftWidth }}
                        className="whoiam-graphic-left relative h-[600px] overflow-hidden"
                    >
                        {/* <div className="absolute z-20 w-full h-full mix-blend-difference px-4 py-4 flex flex-col justify-between items-start">
                            {whoIAmImg.map((item) => (
                                <img key={item.index} src={item.url} className="flex-none"></img>
                            ))}
                        </div> */}
                        <WaveCircle yRange={{ min: 300, max: 500 }} />
                        <WaveCircle yRange={{ min: 300, max: 500 }} delay={200} />
                        <WaveCircle yRange={{ min: 300, max: 500 }} delay={400} />
                        <WaveCircle yRange={{ min: 300, max: 500 }} delay={600} />
                        <WaveCircle yRange={{ min: 300, max: 500 }} delay={800} />
                        <WaveCircle yRange={{ min: 200, max: 400 }} className={'opacity-80'} />
                        <WaveCircle yRange={{ min: 200, max: 400 }} className={'opacity-80 '} delay={200} />
                        <WaveCircle yRange={{ min: 200, max: 400 }} className={'opacity-80'} delay={400} />

                        <div className="absolute bottom-0 w-full h-1/4 bg-g0" />
                        <div className="absolute inset-0 backdrop-blur-3xl z-10" />
                    </motion.div>
                    <motion.div
                        style={{ width: rightWidth }}
                        className="whoiam-graphic-right h-[600px] overflow-hidden relative"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-g0 font-bold whitespace-nowrap">
                            PIXEL TO CODE
                        </span>
                        <LineBox scale={0.36} delay={0.02} />
                        <LineBox scale={0.42} delay={0.04} />
                        <LineBox scale={0.5} delay={0.06} />
                        <LineBox scale={0.6} delay={0.08} />
                        <LineBox scale={0.75} delay={0.1} />
                        <LineBox scale={0.95} delay={0.12} />
                        {/* <img src="/WhoIAm/sample.png" alt="who i am" className="w-full h-full object-cover grayscale" /> */}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhoIAm;
