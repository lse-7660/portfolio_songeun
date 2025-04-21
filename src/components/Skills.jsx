import React from 'react';

const skillsData = {
    language: [
        { name: 'HTML5', imgUrl: '/skills/HTML5.svg' },
        { name: 'CSS3', imgUrl: '/skills/CSS3.svg' },
        {
            name: 'JavaScript',
            imgUrl: '/skills/JavaScript.svg',
        },
        { name: 'React', imgUrl: '/skills/React.svg' },
        { name: 'Redux', imgUrl: '/skills/redux.svg' },
        { name: 'Scss', imgUrl: '/skills/Sass.svg' },
        {
            name: 'styled-components',
            imgUrl: '/skills/styled-components.svg',
        },
        {
            name: 'tailwind',
            imgUrl: '/skills/tailwind.svg',
        },
        { name: 'GSAP', imgUrl: '/skills/GSAP.svg' },
        { name: 'Motion', imgUrl: '/skills/motion.svg' },
    ],
    design: [
        { name: 'Photoshop', imgUrl: '/skills/Ps.svg' },
        { name: 'Illustrator', imgUrl: '/skills/Ai.svg' },
        { name: 'Figma', imgUrl: '/skills/Figma.svg' },
    ],
    colab: [
        { name: 'github', imgUrl: '/skills/github.svg' },
    ],
};

const Skills = () => {
    return (
        <div className="skills inner-common bg-g900">
            <h3 className="text-heading-s font-bold text-g0">
                Skills & Tools
            </h3>
            <div className="skills-wrap flex flex-col gap-10 pl-[390px] -mt-6">
                <div className="skills-language flex flex-row gap-4 ">
                    {skillsData.language.map((item) => (
                        <div
                            key={item.index}
                            className="w-20 h-20 bg-g800 centering"
                        >
                            <img
                                src={item.imgUrl}
                                alt={item.name}
                            />
                        </div>
                    ))}
                </div>
                <div className=" skills-bottom-wrap flex flex-row gap-[60px]">
                    <div className=" skills-design flex flex-row gap-4">
                        {skillsData.design.map((item) => (
                            <div
                                key={item.index}
                                className="w-20 h-20 bg-g800 centering"
                            >
                                <img
                                    src={item.imgUrl}
                                    alt={item.name}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="skills-colab flex flex-row gap-4">
                        {skillsData.colab.map((item) => (
                            <div
                                key={item.index}
                                className="w-20 h-20 bg-g800 centering"
                            >
                                <img
                                    src={item.imgUrl}
                                    alt={item.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
