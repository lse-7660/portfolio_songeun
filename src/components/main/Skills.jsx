import { easeInOut, motion } from 'framer-motion';
import skillsData from '../../assets/api/skillsData';
import { useState } from 'react';

const Skills = ({ sectionRefs }) => {
    const [isHover, setIsHover] = useState(false);
    const [current, setCurrent] = useState(null);

    const SkillBox = ({ item }) => (
        <div
            onMouseEnter={() => {
                setIsHover(true);
                setCurrent(item);
            }}
            onMouseLeave={() => {
                setIsHover(false);
                setCurrent(null);
            }}
            key={item.index}
            className="w-20 h-20 bg-g800 centering relative transition-all ease-in-out duration-500 hover:-mt-2 hover:bg-primary"
        >
            <img src={item.imgUrl} alt={item.name} />
        </div>
    );

    console.log(isHover);
    console.log(current);

    return (
        <div
            ref={(el) => (sectionRefs.current['skills'] = el)}
            className="skills inner-common bg-g900 flex flex-col justify-between gap-24"
        >
            <p className="flex mb-10">
                <motion.div
                    initial={{ width: '30vw' }}
                    whileInView={{ width: 0 }}
                    transition={{ duration: 0.8, ease: easeInOut }}
                    viewport={{ amount: 1, once: true }}
                ></motion.div>
                <span className="text-[10vw] font-bold text-g0 size-fit leading-none">Skills</span>
            </p>
            <div className="skills-wrap flex flex-col items-center gap-10 size-fit mx-auto relative">
                {isHover && current && (
                    <div className="absolute z-10 -top-20 left-0 flex flex-col text-g0">
                        <span className="font-kenoky text-heading-s">{current.name}</span>
                        <span>{current.desc}</span>
                    </div>
                )}
                <div className="skills-language flex flex-row gap-4 ">
                    {skillsData
                        .filter((item) => item.type === 'language')
                        .map((item) => (
                            <SkillBox item={item} />
                        ))}
                </div>
                <div className="skills-bottom-wrap flex flex-row gap-[60px]">
                    <div className="skills-design flex flex-row gap-4">
                        {skillsData
                            .filter((item) => item.type === 'design')
                            .map((item) => (
                                <SkillBox item={item} />
                            ))}
                    </div>
                    <div className="skills-colab flex flex-row flex-wrap gap-4">
                        {skillsData
                            .filter((item) => item.type === 'colab')
                            .map((item) => (
                                <SkillBox item={item} />
                            ))}
                    </div>
                </div>
            </div>

            <div className="text-[10vw] text-g0 text-right font-kenoky leading-none">& Tools</div>
        </div>
    );
};

export default Skills;
