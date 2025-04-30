import { useParams } from 'react-router-dom';
import worksData from '../../assets/api/worksData';
import skillsData from '../../assets/api/skillsData';
import PartCard from './PartCard';

const WorksDetail = () => {
    const { name } = useParams();

    const currentWork = worksData.find(
        (item) => item.name === name
    );
    const toolNames = currentWork.tools
        .split(',')
        .map((tool) => tool.trim());

    const tools = skillsData.filter((skill) =>
        toolNames.includes(skill.name)
    );

    return (
        <div className="text-g0">
            <div className="works-sec-intro px-[60px] pt-[360px] pb-[120px] flex flex-col gap-6 w-screen bg-g900">
                <h3 className="text-display-s">
                    {currentWork.name}
                </h3>
                <div className="bg-g0 w-full h-[1px]"></div>
                <div className="works-intro-info flex flex-row justify-between relative">
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
                <div className="works-intro-info-link flex flex-row gap-6 text-g0">
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
                <div className="works-intro-info-tools flex flex-row gap-4">
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
            <div className="works-sec-conceptImg ">
                <img
                    src={currentWork.conceptImg}
                    alt={currentWork.name}
                />
            </div>
            <div className="works-sec-desc px-[60px] py-[120px] flex flex-col gap-[60px] w-screen bg-g900">
                <div className="works-desc-info flex flex-row gap-[60px]">
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
                </div>
                <div className="works-part">
                    <p className="mb-5 text-heading-s font-bold">
                        Part
                    </p>
                    <div className="flex flex-row gap-6">
                        {currentWork.part.map(
                            (content, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-6 flex-shrink-0 text-g0"
                                >
                                    <img
                                        src={content.imgUrl}
                                        alt={content.title}
                                        className="h-[720px] w-full"
                                    />
                                    <p className="text-heading-xs font-bold">
                                        {content.title}
                                    </p>
                                    <p>{content.desc}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksDetail;
