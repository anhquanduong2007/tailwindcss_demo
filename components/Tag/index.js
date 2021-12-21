import React from 'react';

const Tag = ({ contentTag }) => {
    return (
        <div className={`absolute top-5 left-5 z-10 w-[56px] h-[22px] ${contentTag !== "" ? "bg-[#F4C340]" : "bg-[#ADD66C]"} rounded-[8px] text-[#347758] flex justify-center items-center font-bold
        text-[12px] tracking-[0.2px] font-['Circular Std']`}>
            {contentTag !== "" ? contentTag : "New"}
        </div>
    );
};

export default Tag;