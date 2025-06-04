import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Design = ({ sectionRefs }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            ref={(el) => (sectionRefs.current['design-gallery'] = el)}
            className="design-gallery inner-common !py-[240px] bg-g900 flex flex-row justify-between"
        >
            <div className="flex flex-col justify-between">
                <div className="flex flex-col items-start gap-5">
                    <h3 className="font-bold text-g0 text-center font-kenoky text-display-m leading-none mb-4">
                        Design Gallery
                    </h3>
                    <p className="text-g0 w-[35vw]">
                        배너, 상세페이지, PPT 등 다양한 디자인 작업물을 확인해 보세요.
                        <br />
                        4년간의 디자인 경력을 바탕으로, 콘텐츠의 목적에 맞는 시각적 위계를 설계하고 가독성 높은 디자인을
                        만드는 데 집중해왔습니다. <br />
                        사용자의 시선 흐름을 고려한 레이아웃과 명확한 정보 전달을 항상 우선합니다.
                    </p>
                </div>
                <Link
                    to="/design"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="size-fit"
                >
                    <div className="flex items-center text-heading-xs">
                        <span className="text-g0 mr-5">View Details</span>
                        <span class="material-symbols-outlined text-g0">arrow_outward</span>
                    </div>
                    <div
                        className={`h-[1px] bg-g0 transition-all ease-in-out duration-300 w-0 ${isHovered && 'w-full'}`}
                    ></div>
                </Link>
            </div>
            <div onClick={() => navigate('/design')} className="cursor-pointer w-1/2 overflow-hidden relative">
                <motion.div
                    initial={{ height: '100%' }}
                    whileInView={{ height: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 1 }}
                    className="absolute z-10 w-full bg-primary"
                ></motion.div>
                <img src="/designimage/designgallery_mockup.png" alt="디자인 갤러리 바로가기" className="scale-150" />
            </div>
        </div>
    );
};

export default Design;
