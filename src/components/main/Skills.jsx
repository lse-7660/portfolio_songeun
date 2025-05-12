import React from 'react';
import skillsData from '../../assets/api/skillsData';

const Skills = () => {
    return (
        <div className="skills inner-common flex flex-row gap-[100px] items-start bg-g900">
            <h3 className="text-heading-s font-bold text-g0 shrink-0">
                Skills & Tools
            </h3>
            <div className="skills-wrap flex flex-col gap-10">
                <div className="skills-language flex flex-row gap-4 ">
                    {skillsData
                        .filter(
                            (item) =>
                                item.type === 'language'
                        )
                        .map((item) => (
                            <div
                                key={item.index}
                                className="w-20 h-20 bg-g800 centering shrink-0"
                            >
                                <img
                                    src={item.imgUrl}
                                    alt={item.name}
                                />
                            </div>
                        ))}
                </div>
                <div className="skills-bottom-wrap flex flex-row gap-[60px]">
                    <div className="skills-design flex flex-row gap-4">
                        {skillsData
                            .filter(
                                (item) =>
                                    item.type === 'design'
                            )
                            .map((item) => (
                                <div
                                    key={item.index}
                                    className="w-20 h-20 bg-g800 centering shrink-0"
                                >
                                    <img
                                        src={item.imgUrl}
                                        alt={item.name}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="skills-colab flex flex-row flex-wrap gap-4">
                        {skillsData
                            .filter(
                                (item) =>
                                    item.type === 'colab'
                            )
                            .map((item) => (
                                <div
                                    key={item.index}
                                    className="w-20 h-20 bg-g800 centering shrink-0"
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
