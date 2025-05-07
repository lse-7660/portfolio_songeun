import { useParams } from 'react-router-dom';
import worksData from '../../assets/api/worksData';
import skillsData from '../../assets/api/skillsData';
import { useEffect, useRef, useState } from 'react';
import {
    motion,
    useInView,
    useScroll,
    useTransform,
} from 'framer-motion';

const WorksDetail = () => {
    const { name } = useParams();

    /* 페이지 로드 시 최상단 스크롤 */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /* 데이터 필터링 */
    const currentWork = worksData.find(
        (item) => item.name === name
    );
    const toolNames = currentWork.tools
        .split(',')
        .map((tool) => tool.trim());

    const tools = skillsData.filter((skill) =>
        toolNames.includes(skill.name)
    );

    /* 인트로 선 애니메이션 */
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    /* 인트로 텍스트 애니메이션 */
    const introTransition =
        'transition-all duration-700 ease-out';
    const introAniStart = 'opacity-0 -translate-y-2';
    const introAniEnd = 'opacity-100 translate-y-0';

    /* 스크롤트리거 애니메이션 */
    const AnimatedUpward = ({ children, className }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, {
            once: true,
            margin: '-20% 0px',
        });

        return (
            <motion.div
                ref={ref}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView && { y: 1, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: 'easeOut',
                }}
                className={className}
            >
                {children}
            </motion.div>
        );
    };

    /* 가로스크롤 */
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });
    const partWidth =
        currentWork.part.length * 1080 +
        (currentWork.part.length - 1) * 24;
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ['0px', `-${partWidth}px`]
    );

    return (
        <div className="text-g0">
            <div
                className={`works-sec-intro px-[60px] pb-[120px] flex flex-col justify-end gap-6 w-screen bg-g900 delay-[2400ms] ${introTransition} ${
                    loaded ? 'h-[80vh]' : 'h-[100vh]'
                }`}
            >
                <h3
                    className={`text-display-s delay-1000 ${introTransition} ${
                        loaded ? introAniEnd : introAniStart
                    }`}
                >
                    {currentWork.name}
                </h3>
                <div
                    className={`bg-g0 h-[1px] transition-all duration-1000 ease-out ${
                        loaded
                            ? 'w-full opacity-100'
                            : 'w-0 opacity-0'
                    }`}
                ></div>
                <div
                    className={`works-intro-info flex flex-row justify-between relative delay-[1300ms] ${introTransition} ${
                        loaded ? introAniEnd : introAniStart
                    }`}
                >
                    <p className="">{currentWork.desc}</p>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-row gap-5">
                        {currentWork.team
                            .split(',')
                            .map((item) => item.trim())
                            .map((item) => (
                                <span>{item}</span>
                            ))}
                    </div>
                    <p>{currentWork.date}</p>
                </div>
                <div
                    className={`works-intro-info-link flex flex-row gap-6 text-g0 delay-[1500ms] ${introTransition} ${
                        loaded ? introAniEnd : introAniStart
                    }`}
                >
                    <a
                        href={currentWork.url}
                        target="blank"
                        className="text-g0"
                    >
                        Website
                    </a>
                    <a
                        href={currentWork.git}
                        target="blank"
                        className="text-g0"
                    >
                        Github
                    </a>
                </div>
                <div
                    className={`works-intro-info-tools flex flex-row gap-4 delay-[2000ms] ${introTransition} ${
                        loaded ? introAniEnd : introAniStart
                    }`}
                >
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="w-20 h-20 bg-g800 centering"
                        >
                            <img
                                src={tool.imgUrl}
                                alt={tool.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="works-sec-conceptImg h-screen fixed top-0 -z-10 inset-0">
                <img
                    src={currentWork.conceptImg}
                    alt={currentWork.name}
                    className="h-full object-cover"
                />
            </div>
            <div className="works-sec-desc px-[60px] py-[120px] flex flex-col gap-[60px] w-screen bg-g900 mt-[100vh]">
                <AnimatedUpward className="works-desc-info flex flex-row gap-[60px]">
                    <div className="mission">
                        <p className="mb-5 text-heading-s font-bold">
                            Mission
                        </p>
                        <div className="flex flex-col gap-4">
                            {currentWork.mission
                                .split(',')
                                .map((item) => item.trim())
                                .map((item) => (
                                    <p>{item}</p>
                                ))}
                        </div>
                    </div>
                    <div className="direction">
                        <p className="mb-5 text-heading-s font-bold">
                            Direction
                        </p>
                        <div className="flex flex-col gap-4">
                            {currentWork.direction
                                .split(',')
                                .map((item) => item.trim())
                                .map((item) => (
                                    <p>{item}</p>
                                ))}
                        </div>
                    </div>
                </AnimatedUpward>
                <AnimatedUpward className="works-part">
                    <p className="mb-5 text-heading-s font-bold">
                        Part
                    </p>
                    <div
                        className="part-scroll"
                        ref={containerRef}
                        style={{ height: `${partWidth}px` }}
                    >
                        <motion.div
                            style={{ x }}
                            className="flex flex-row gap-6 sticky top-6"
                        >
                            {currentWork.part.map(
                                (content, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-6 flex-shrink-0 text-g0 w-[1080px]"
                                    >
                                        <img
                                            src={
                                                content.imgUrl
                                            }
                                            alt={
                                                content.title
                                            }
                                            className="h-[720px] w-full object-cover"
                                        />
                                        <p className="text-heading-xs font-bold">
                                            {content.title}
                                        </p>
                                        <p>
                                            {content.desc}
                                        </p>
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>
                </AnimatedUpward>
            </div>
        </div>
    );
};

export default WorksDetail;
