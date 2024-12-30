import React from 'react';
import '../assets/CategoryBrand.css';

export default function CategoryBrand() {
    return (
        <div className='CategoryBrand'>
            <div className="CategoryBrand-inner bg-[rgba(0,0,0,1)] px-[100px] py-[42px] flex flex-row gap-[42px] text-white items-center justify-between">
                <p className="font-[700] text-[32px] leading-[38.73px] text-white animate-slide-in">Romance</p>
                <p className="font-[700] text-[32px] leading-[38.73px] text-white animate-slide-in delay-100">Mystery</p>
                <p className="font-[700] text-[32px] leading-[38.73px] text-white animate-slide-in delay-200">Thrillers</p>
                <p className="font-[700] text-[32px] leading-[38.73px] text-white animate-slide-in delay-300">Cookbooks</p>
                <p className="font-[700] text-[32px] leading-[38.73px] text-white animate-slide-in delay-400">Essays</p>
                <p className="font-[700] text-[32px] leading-[38.73px] text-white animate-slide-in delay-500">History</p>
            </div>
        </div>
    );
}
