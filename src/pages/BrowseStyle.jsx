import React from 'react';

export default function BrowseStyle() {
    return (
        <div className='BrowseStyle bg-[#F0F0F0] mt-[80px] mx-[100px]'>
            <div className="BrowseStyle-inner py-[70px] px-[64px]">
                <p className="BrowseStyle-title font-bold text-[48px] text-center leading-[auto] text-[#000000] pb-[64px]">BROWSE BY dress STYLE</p>
                <div className="List-BrowseStyle grid grid-rows-[auto_auto] grid-cols-[1fr_3fr] gap-[20px]">
                    {/* Hàng đầu: 1:3 */}
                    <div className="Items-BrowseStyle flex items-center justify-center bg-white row-[1] col-[1] w-full rounded-[20px]  h-[full]">
                        <img src="./assets/imgs/bestseller2.jpg" alt="" className='h-[90%] w-[90%]' />
                    </div>
                    <div className="Items-BrowseStyle flex items-center justify-center bg-white row-[1] col-[2] w-full rounded-[20px]  h-[full] p-4">
                        <img src='./assets/imgs/BestSeller1.avif' alt="" className='h-[100%] w-full' />

                    </div>
                    {/* Hàng thứ hai: 3:1 */}

                    <div className="Items-BrowseStyle flex items-center justify-center bg-white row-[2] col-[1] w-full rounded-[20px]  h-[full]">
                        <img src="./assets/imgs/bestseller3.webp" alt="" className='h-[90%] w-[90%]' />

                    </div>
                    <div className="Items-BrowseStyle flex items-center justify-center bg-white row-[2] col-[2] w-full rounded-[20px]  h-[full]">
                        <img src='./assets/imgs/BestSeller1.avif' alt="" className='h-[100%] w-full' />

                    </div>
                </div>
            </div>
        </div>
    );
}
