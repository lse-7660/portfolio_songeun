import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { galleryActions } from '../../store/modules/gallerySlice';

const navList = [
    { title: 'Promotion', category: 'event' },
    { title: 'Game Banner', category: 'game' },
    { title: 'PPT Design', category: 'ppt' },
    { title: 'Logo Design', category: 'logo' },
];

const Gallery = () => {
    const dispatch = useDispatch();
    const { filteredData } = useSelector(
        (state) => state.gallery
    );

    return (
        <div className="design-gallery bg-g20 ">
            <div className="gallery-tab inner-gallery fixed top-0 z-20 flex justify-center backdrop-blur-xl">
                <ul className="flex gap-5 py-5">
                    {navList.map((item) => (
                        <li
                            className="px-5 py-2 cursor-pointer border rounded-md border-g100 text-g100"
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
            <div className="gallery-intro inner-gallery h-screen">
                <div className="absolute bottom-20 w-full">
                    <img
                        src="/Design_Gallery.svg"
                        alt="design gallery"
                        className=""
                    />
                </div>
            </div>
            <div className="gallery-wrap inner-gallery grid grid-cols-4 gap-5">
                {filteredData.map((item) => (
                    <div
                        key={item.index}
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
                            className="h-full object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
