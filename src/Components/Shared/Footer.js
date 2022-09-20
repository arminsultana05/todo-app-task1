import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 pt-16 pb-5">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-3xl">TODO</h1>
                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Support</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Terms of Service</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Privacy Policy</p>
                </div>
                <div className="right-icon flex text-black mt-4">
                        <a href="https://www.facebook.com/armin.sultana.58/" target='_blank'><BsFacebook className='ml-8 text-2xl'></BsFacebook></a>
                        <a href="https://www.linkedin.com/in/armin-sultana-5209a6237/" target='_blank'><BsLinkedin className='ml-8 text-2xl'></BsLinkedin></a>
                        <a href="https://github.com/arminsultana05" target='_blank'><BsGithub className='ml-8 text-2xl'></BsGithub></a>
                    </div>
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 text-gray-800">
                      @ 2022 <span className="font-semibold">TODO</span>
                    </p>
                    <div className="border-l border-gray-800 pl-2 ml-2">
                        <p className="text-base leading-4 text-gray-800">Inc. All righys reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
