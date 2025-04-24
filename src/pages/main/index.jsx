import React from 'react';
import {
    Design,
    Intro,
    Skills,
    WhoIAm,
    Works,
} from '../../components/main';
import Header from '../../common/header';

const Main = () => {
    return (
        <div>
            <Header />
            <Intro />
            <WhoIAm />
            <Skills />
            <Works />
            <Design />
        </div>
    );
};

export default Main;
