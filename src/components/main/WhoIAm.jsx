import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WhoIAm = ({ sectionRefs }) => {
    const getRandomPosition = (yRange, maxX = 860) => {
        return {
            x: Math.random() * maxX,
            y:
                yRange.min +
                Math.random() * (yRange.max - yRange.min),
        };
    };

    // 원 하나를 담당하는 컴포넌트
    const WaveCircle = ({
        delay = 0,
        yRange,
        className,
    }) => {
        const [position, setPosition] = useState(
            getRandomPosition(yRange)
        );

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

    return (
        <div
            ref={(el) =>
                (sectionRefs.current['who-i-am'] = el)
            }
            className="who-i-am inner-common flex flex-col items-center gap-10 bg-g900"
        >
            <div>
                <h3 className="text-g0 mb-6 centering">
                    Who I Am
                </h3>
                <p className="text-display-s/[120%] font-bold text-g0">
                    From design to development, I create
                    intuitive and efficient user experiences
                    through clean and maintainable front-end
                    code.
                </p>
            </div>
            <div className="relative w-[860px] h-[600px] overflow-hidden">
                {/* 움직이는 원들 */}
                <WaveCircle
                    yRange={{ min: 300, max: 500 }}
                />
                <WaveCircle
                    yRange={{ min: 300, max: 500 }}
                    delay={200}
                />
                <WaveCircle
                    yRange={{ min: 300, max: 500 }}
                    delay={400}
                />
                <WaveCircle
                    yRange={{ min: 300, max: 500 }}
                    delay={600}
                />
                <WaveCircle
                    yRange={{ min: 300, max: 500 }}
                    delay={800}
                />
                <WaveCircle
                    yRange={{ min: 200, max: 400 }}
                    className={'opacity-80'}
                />
                <WaveCircle
                    yRange={{ min: 200, max: 400 }}
                    className={'opacity-80 '}
                    delay={200}
                />
                <WaveCircle
                    yRange={{ min: 200, max: 400 }}
                    className={'opacity-80'}
                    delay={400}
                />

                <div className="absolute bottom-0 w-full h-1/4 bg-g0" />
                {/* 블러 오버레이 */}
                <div className="absolute inset-0 backdrop-blur-3xl z-10" />
            </div>
            <p className="text-body-m w-[860px] mx-auto text-g0">
                디자인부터 개발까지의 전 과정을 아우르며,
                사용자 중심의 직관적이고 효율적인 경험을
                만들어내는 프론트엔드 개발자입니다. UI/UX에
                대한 깊은 이해를 바탕으로, 사용자에게
                명확하고 일관된 인터페이스를 제공하고자
                노력하며, 이를 실현하기 위해 깔끔하고 유지
                보수가 용이한 코드를 작성하는 것을 중요하게
                생각합니다. 사용자와 개발자 모두가 만족할 수
                있는 결과물을 만들기 위해 세심한 설계와
                끊임없는 개선을 추구합니다.
            </p>
        </div>
    );
};

export default WhoIAm;
