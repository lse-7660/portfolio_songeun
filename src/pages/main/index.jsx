import React, { useRef } from 'react';
import {
    Design,
    Intro,
    Skills,
    WhoIAm,
    Works,
} from '../../components/main';
import Header from '../../common/header';

const Main = () => {
    const sectionRefs = useRef({});

    const scrollToSection = (key) => {
        sectionRefs.current[key]?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <Intro sectionRefs={sectionRefs} />
            <WhoIAm sectionRefs={sectionRefs} />
            <Skills sectionRefs={sectionRefs} />
            <Works sectionRefs={sectionRefs} />
            <Design sectionRefs={sectionRefs} />
        </div>
    );
};

export default Main;
