import React from 'react';

const PartCard = (content) => {
    const { title, desc, imgUrl } = content;
    return (
        <div className="flex flex-col gap-6 text-g0">
            <img
                src={imgUrl}
                alt={title}
                className="h-[720px]"
            />
            <p>{title}</p>
            <p>{desc}</p>
        </div>
    );
};

export default PartCard;
