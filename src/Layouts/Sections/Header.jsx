import React from "react";
import { Link } from "react-router-dom";
import { PATH_LISTBOOK } from "../../routes/path";
export default function Header() {
    return (
        <header className="flex flex-col ">
            <div className="line h-[38px] bg-black"></div>
            <div className="navbar py-[24px] px-[100px] w-full flex flex-row items-center justify-around border-b-2 border-b-[#F0F0F0]">
                <div className="logo">
                    {/* <p className="font-[700] text-[28px] leading-[32.73px]"></p> */}
                    <img src="./assets/Logo/FourBird.png" alt="" className="w-[75px] h-[75px] object-cover rounded-5px" />
                </div>
                <nav>
                    <div>
                        <ul className="flex flex-row items-center justify-center">
                            <li className="cursor-pointer border-b-[2px] border-b-transparent hover:border-b-[#000000] hover:border-b-[2px]  px-[24px] py-2 text-[16px] font-[400] leading-[19.36px]">Trang chủ</li>
                            <li className="cursor-pointer border-b-[2px] border-b-transparent hover:border-b-[#000000] hover:border-b-[2px]  px-[24px] py-2 text-[16px] font-[400] leading-[19.36px]">Tin tức</li>
                            <li className="cursor-pointer border-b-[2px] border-b-transparent hover:border-b-[#000000] hover:border-b-[2px]  px-[24px] py-2 text-[16px] font-[400] leading-[19.36px]">
                                <Link to={PATH_LISTBOOK}>Sách</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div>
                    <div className="act-inner">
                        <button className="py-[12px] px-[20px] bg-[rgba(240,240,240,1)] border-transparent rounded-[62px] text-[14px] font-[400] leading-[19.36px] text-[rgba(0,0,0,0.4)]">Đăng nhập</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
