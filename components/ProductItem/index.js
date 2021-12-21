import Image from 'next/image';
import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';
import Tag from "../Tag/";
const ProductItem = ({ isTag, contentTag, imgSrc }) => {
    return (
        <div className="group flex flex-col border border-[#F2F2F2] p-6 rounded-[34px] box-border hover:border-[#F4C340] mt-5 relative">
            {
                isTag ? <Tag contentTag={contentTag} /> : ""
            }
            <div className="opacity-0 absolute w-[42px] h-[42px] rounded-circle right-[20px] top-[25px] bg-[#347758] z-50 flex justify-center items-center group-hover:opacity-100">
                <BsHeart className="text-[#F4C340]" />
            </div>
            <div className="opacity-0 absolute w-[42px] h-[42px] rounded-circle right-[20px] top-[80px] bg-[#F4F4F4] z-50 flex justify-center items-center group-hover:opacity-100">
                <BsEye className="text-[#347758]" />
            </div>
            <img src={imgSrc} alt="" className="w-full !h-[170px] object-cover" />
            <div className="text-[#F4C340] text-[15px] my-2">Fresh Vegetables</div>
            <h6 className="font-bold  text-[16px] tracking-[0.288px] leading-[22px] font-['Signika'] my-2">Baby-Cut Carrots - 1lb - Good & Gather™</h6>
            <div className="font-[450] text-[#BCBCBC] text-[15px] leading-[27px] my-2 font-['Circular Std']">Unit: <span className="text-black">Kg</span></div>
            <div className="my-2 text-[#347758] tracking-[0.2px] leading-[28px] text-[20px] font-bold font-['Signika']">$1.49 <span className="line-through text-[16px] text-[#BCBCBC] pl-1">$2.99</span></div>
            <div className="flex items-center justify-between mt-3">
                <div className="flex">
                    <button className="w-[40px] h-[40px] rounded-l-[10px] border border-[#F4F4F4]">-</button>
                    <div className="w-[40px] h-[40px] bg-[#F4F4F4] flex justify-center items-center">1</div>
                    <button className="w-[40px] h-[40px] rounded-r-[10px] border border-[#F4F4F4]">+</button>
                </div>
                <div className="w-[50px] h-[50px] rounded-sides border border-[#F4F4F4] bg-[#F4F4F4] flex justify-center items-center group-hover:bg-[#F4C340]">
                    <BiShoppingBag className="text-[#B0B0B0] group-hover:text-black" />
                </div>

            </div>

        </div>
    );
};

export default ProductItem;