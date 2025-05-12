import React from 'react';

const Intro = () => {
    return (
        <div className="intro bg-g20">
            <div className="inner-intro flex flex-col justify-between h-screen">
                <div className="intro-title">
                    <p className="text-center text-[240px] margin-5 font-bold">
                        DESIGNER
                    </p>
                    <p className="text-center">
                        디자인 경력과 개발 효율을 갖춘
                        프론트엔드 개발자, 이송은입니다.
                        <br /> 디테일을 고민하고, 경험을
                        설계합니다.
                    </p>
                </div>
                <div className="intro-info flex flex-col items-center">
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
