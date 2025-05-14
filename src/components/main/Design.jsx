import React from 'react';
import { useNavigate } from 'react-router-dom';

const Design = ({ sectionRefs }) => {
    const navigate = useNavigate();

    return (
        <div
            ref={(el) =>
                (sectionRefs.current['design-gallery'] = el)
            }
            className="design-gallery inner-common bg-g900 flex flex-col gap-[60px]"
        >
            <div className="flex flex-col gap-5">
                <h3 className="text-heading-s font-bold text-g0 text-center">
                    Design Gallery
                </h3>
                <p className="text-g0 text-center">
                    배너, 상세페이지, PPT 등 다양한 디자인
                    작업물을 확인해 보세요.
                    <br />
                    4년간의 디자인 경력을 바탕으로, 콘텐츠의
                    목적에 맞는 시각적 위계를 설계하고
                    가독성 높은 디자인을 만드는 데
                    집중해왔습니다. <br />
                    사용자의 시선 흐름을 고려한 레이아웃과
                    명확한 정보 전달을 항상 우선합니다.
                </p>
            </div>
            <div
                className="w-full"
                onClick={() => navigate('/design')}
            >
                <img
                    src="/designimage/designgallery.png"
                    alt="디자인 갤러리 바로가기"
                />
            </div>
        </div>
    );
};

export default Design;
