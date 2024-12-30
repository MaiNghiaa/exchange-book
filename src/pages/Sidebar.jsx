import React from 'react'

export default function Sidebar() {
    return (
        <div className="relative main-inner pt-[102px] px-[100px] pb-[122px] bg-[rgba(240,240,240,1)] flex items-end justify-around">
            <div>
                <div><p className="title font-[700] text-[64px] leading-[64px] w-[577px] max-w-[577px]">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </p>
                    <p className="my-[31px] sub-title w-[545px] text-[16px] font-[400] leading-[22px] text-[rgba(0,0,0,0.6)]">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p></div>
                <button className="buy-now text-[16px] font-[500] leading-[19.36px] text-[rgba(255,255,255,1)]  py-[16px] px-[54px] rounded-[62px] border-transparent bg-[rgba(0,0,0,1)]">Shop Now</button>
                <div className="evaluate mt-[48px]">
                    <div className="evaluate-inner flex flex-row items-center">
                        <div className="evaluate-item pr-[32px] border-r border-[rgba(0,0,0,0.1)] flex flex-col items-start justify-start">
                            <p className="evaluate-item-title font-bold leading-[48.41px] text-[40px] text-[rgba(0,0,0,1)]">200+</p>
                            <p className="evaluate-item-desc font-normal text-[16px] leading-[22px]">International Brands</p>
                        </div>
                        <div className="evaluate-item px-[32px] flex flex-col items-start justify-start">
                            <p className="evaluate-item-title font-bold leading-[48.41px] text-[40px] text-[rgba(0,0,0,1)]">2,000+</p>
                            <p className="evaluate-item-desc font-normal text-[16px] leading-[22px]">High-Quality Products</p>
                        </div>
                        <div className="evaluate-item pl-[32px] border-l border-[rgba(0,0,0,0.1)] flex flex-col items-start justify-start">
                            <p className="evaluate-item-title font-bold leading-[48.41px] text-[40px] text-[rgba(0,0,0,1)]">30,000+</p>
                            <p className="evaluate-item-desc font-normal text-[16px] leading-[22px]">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src="./img1.png" alt="" className='w-full h-full object-cover absolute' /> */}
            <div className='border border-[1px_solid_#cccccc] '>
                <img src="./assets/imgs/download.jpeg" alt="" />
            </div>
        </div>
    )
}
