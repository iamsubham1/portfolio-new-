import React from 'react';

import flap from '../assets/Vector 1.svg'
import { IoMdDownload } from "react-icons/io";

const Footer = () => {



    return (

        <div className='container flex justify-items-start items-center'>
            <div className='bg-[#9DC32F] max-h-[65%] max-w-[50%] z-10 envelope flex justify-between '  >

                <div className='max-w-[3vw] max-h-[25vh] sidebar flex-col text-center vertical-text wrapppp poppins bg-[#000000] text-[#9DC32F] place-self-center '>
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                    <span>A</span>
                    <span>C</span>
                    <span>T</span>

                </div>

                <img src={flap} className='relative top-1' />
            </div>

            <div className='max-h-[50%] max-w-[30%] contactCardShadow text-white flex-col flexd poppins'>
                <div className='contactInfo ml-5 max-h-[80%] flex flex-col p-8 font-semibold text-lg text-[#909090]'>
                    <h3>Address:Berhampur,Odisha</h3>
                    <h3>Ph no:9078133097</h3>
                    <h3>Email:myworkemail.subham@gmail.com</h3>

                    <div className='resumeSection flex-1 max-h-[100%] text-xl mt-8'>
                        <h2>DOWNLOAD RESUME</h2>
                        <button type='button' className=' mt-3 text-black w-[8vw] h-[4.5vh] bg-[#CFFF44] rounded-md text-center flex justify-center items-center'>
                            <IoMdDownload />
                        </button>
                    </div>
                </div>

            </div>

            <span className='bg-[#6a6a6a2f] self-end w-[100vw] h-[7vh] absolute items-center flex justify-end'> <p className='mr-5 text-[#9DC32F]'> © This Website is designed and developed by Subham Das </p></span>
        </div>

    )
}

export default Footer
