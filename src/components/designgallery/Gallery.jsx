import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className="design-gallery bg-g20 ">
            <div className="gallery-tab inner-gallery fixed top-0 flex justify-center ">
                <ul className="flex gap-10">
                    <li>Promotion</li>
                    <li>Game Banner</li>
                    <li>PPT Design</li>
                    <li>Logo Design</li>
                </ul>
            </div>
            <div className="gallery-intro inner-gallery h-[100vh]">
                <div className="absolute bottom-20 w-full">
                    <img
                        src="/Design_Gallery.svg"
                        alt="design gallery"
                        className=""
                    />
                </div>
            </div>
            <div className="gallery-wrap inner-gallery"></div>
        </div>
    );
};

export default Gallery;
