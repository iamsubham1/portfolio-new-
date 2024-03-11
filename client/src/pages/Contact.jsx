import React from 'react';

import flap from '../assets/Vector 1.svg'

const Footer = () => {
    return (
        <div className='container flex justify-items-start items-center'>
            <div className='bg-[#9DC32F] max-h-[65%] max-w-[50%] z-10 envelope flex justify-end '  >
                <div className='max-w-[3vw] max-h-[25vh] sidebar right-[23vw] flex-col text-center vertical-text wrapppp poppins bg-[#000000] text-[#9DC32F] self-start'>
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
            <div className=' max-h-[50%] max-w-[30%] contactCardShadow '></div>
        </div>

    )
}

export default Footer
