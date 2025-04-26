import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { galleryActions } from '../../store/modules/gallerySlice';
import {
    motion,
    useTransform,
    useScroll,
} from 'framer-motion';

const navList = [
    { title: 'Promotion', category: 'event' },
    { title: 'Game Banner', category: 'game' },
    { title: 'PPT Design', category: 'ppt' },
    { title: 'Logo Design', category: 'logo' },
];

const Gallery = () => {
    const dispatch = useDispatch();
    const { filteredData, selectedCategory } = useSelector(
        (state) => state.gallery
    );
    const [isShowModal, setIsShowModal] = useState(false);

    /*카테고리 선택 시 스크롤 y 위치*/
    useEffect(() => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    }, [selectedCategory]);

    /*페이지 로드 시 스크롤 y 위치*/
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    /*Intro Effect*/
    useEffect(() => {
        const target = document.querySelector(
            '.gallery-intro'
        );

        const handleScroll = () => {
            const progress = Math.min(
                window.scrollY / (window.innerHeight / 2),
                1
            );
            target.style.opacity = `${1 - progress}`;
            target.style.filter = `blur(${
                progress * 50
            }px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () =>
            window.removeEventListener(
                'scroll',
                handleScroll
            );
    }, []);

    return (
        <div className="design-gallery bg-g20 ">
            <div className="gallery-tab fixed top-5 left-1/2 -translate-x-1/2 z-20 flex justify-center px-8 bg-[#c4c5c480] backdrop-blur-xl rounded-lg">
                <ul className="flex gap-5 py-5">
                    {navList.map((item) => (
                        <li
                            className={`px-5 py-2 cursor-pointer border rounded-md border-g500 text-g500 ${
                                item.category ===
                                    selectedCategory &&
                                'bg-g900 !text-g0 !border-none'
                            }`}
                            key={item.index}
                            onClick={() =>
                                dispatch(
                                    galleryActions.setCategory(
                                        `${item.category}`
                                    )
                                )
                            }
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="gallery-intro px-[60px] py-[60px] fixed top-0 z-0 h-screen flex flex-col justify-end gap-5 bg-g20">
                <img
                    src="/Design_Gallery.svg"
                    alt="design gallery"
                    className=""
                />
                <span className="text-center">
                    Scroll Down
                </span>
            </div>
            <div className="gallery-wrap mt-[50vh] px-[60px] py-[120px] absolute z-10 grid grid-cols-4 gap-5">
                {filteredData.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-xl overflow-hidden ${
                            item.span === 1
                                ? 'col-span-1'
                                : item.span === 2
                                ? 'col-span-2'
                                : item.span === 3
                                ? 'col-span-3'
                                : item.span === 4
                                ? 'col-span-4'
                                : 'col-span-1'
                        }`}
                    >
                        <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="h-full object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out cursor-pointer"
                            onClick={() =>
                                dispatch(
                                    galleryActions.setCurImg(
                                        index
                                    )
                                )
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
