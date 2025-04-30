import React from 'react';
import { Link } from 'react-router-dom';

const WorksHeader = () => {
    return (
        <div className="fixed top-0 z-40 flex flex-row justify-between w-screen px-[60px] py-4">
            <Link to={'/'} className="text-g0">
                HOME
            </Link>
            <p className="text-g0">
                Portfolio-Lee Song Eun
            </p>
        </div>
    );
};

export default WorksHeader;
