import React from 'react'

export default function CategoryBook() {
    return (
        <section className='newBook mt-[72px] px-[100px]'>
            <div className="newBook-inner ">
                <p className="title-newBook uppercase font-bold text-[48px] leading-[58px] text-center mb-[55px]">New Books</p>
                <div className="list-newBook">
                    <ul className='list-newBook-inner flex flex-row items-center justify-around'>
                        <li className='items-newBook'>
                            <div className="items-newBook-img  rounded-[20px] fill-[#F0EEED] overflow-hidden">
                                <img src="./ao.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="items-newBook-text pt-[17px]">
                                <p className='items-newBook-text-title font-bold text-[16px] leading-[24px]'>T-SHIRT WITH TAPE DETAILS</p>
                                <p className='items-newBook-text-desc font-bold text-[18px] leading-[29px]'>$120</p>
                            </div>
                        </li>
                        <li className='items-newBook'>
                            <div className="items-newBook-img  rounded-[20px] fill-[#F0EEED] overflow-hidden">
                                <img src="./ao.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="items-newBook-text pt-[17px]">
                                <p className='items-newBook-text-title font-bold text-[16px] leading-[24px]'>SKINNY FIT JEANS</p>
                                <p className='items-newBook-text-desc font-bold text-[18px] leading-[29px]'>$240</p>
                            </div>
                        </li>
                        <li className='items-newBook'>
                            <div className="items-newBook-img  rounded-[20px] fill-[#F0EEED] overflow-hidden">
                                <img src="./ao.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="items-newBook-text pt-[17px]">
                                <p className='items-newBook-text-title font-bold text-[16px] leading-[24px]'>CHECKERED SHIRT</p>
                                <p className='items-newBook-text-desc font-bold text-[18px] leading-[29px]'>$240</p>
                            </div>
                        </li>
                        <li className='items-newBook'>
                            <div className="items-newBook-img  rounded-[20px] fill-[#F0EEED] overflow-hidden">
                                <img src="./ao.png" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className="items-newBook-text pt-[17px]">
                                <p className='items-newBook-text-title font-bold text-[16px] leading-[24px]'>SLEEVE STRIPED T-SHIRT</p>
                                <p className='items-newBook-text-desc font-bold text-[18px] leading-[29px]'>$240</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center items-center mt-[40px]'>
                    <button className=' act-btn-viewAllBook rounded-[62px] p-[16px_54px] bg-transparent border border-[rgba(0)]'> View All</button></div>
            </div>
        </section>
    )
}
