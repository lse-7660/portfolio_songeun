import React, { useRef } from 'react';
import { Design, Intro, Skills, WhoIAm, Works } from '../../components/main';
import Header from '../../common/header';

const Main = () => {
    const sectionRefs = useRef({});

    const scrollToSection = (key) => {
        sectionRefs.current[key]?.scrollIntoView({
            behavior: 'smooth',
        });
    };
    const sequences = [
        ['D', 'A', 'F', 'R', 'T', 'R', 'D'],
        ['E', 'I', 'Z', 'V', 'A', 'W', 'E'],
        ['S', 'R', 'A', 'B', 'J', 'A', 'V'],
        ['I', 'A', 'F', 'R', 'T', 'D', 'E'],
        ['G', 'I', 'Z', 'V', 'A', 'J', 'L'],
        ['N', 'R', 'A', 'B', 'D', 'L', 'O'],
        ['E', 'Y', 'N', 'X', 'E', 'U', 'P'],
        ['R', 'L', 'C', 'F', 'A', 'X', 'E'],
    ];
    const lineHeight = 240;
    const durationPerStep = 0.2;
    const animationEndTime = Math.max(
        ...sequences.map((column, i) => 1 + i * durationPerStep + column.length * durationPerStep + 0.4)
    );

    return (
        <div>
            <Header scrollToSection={scrollToSection} animationEndTime={animationEndTime} />
            <Intro
                sectionRefs={sectionRefs}
                sequences={sequences}
                lineHeight={lineHeight}
                durationPerStep={durationPerStep}
                animationEndTime={animationEndTime}
            />
            <WhoIAm sectionRefs={sectionRefs} />
            <Skills sectionRefs={sectionRefs} />
            <Works sectionRefs={sectionRefs} />
            <Design sectionRefs={sectionRefs} />
        </div>
    );
};

export default Main;
