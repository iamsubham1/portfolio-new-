import React from 'react';
import iphone from '../assets/iphonepng.png';
import myPic from '../assets/mypic.svg'

const PhoneComponent = () => {

    const style = {
        height: "84%",
        top: "12%",
        left: "12%"
    }

    return (
        <>
            <div className='phoneContainer flex gap-[35vw]'>
                <img src={iphone} className='relative' style={style} />
                <img src={myPic} className='relative max-h-[65%] top-[8%]' />
            </div>
            <div className='banner bg-[#181717] z-99 relative top-[-30%] max-h-20 text-[#4e4e4e]' >
                <p class="marquee">
                    <span>DEVELOPER &nbsp; &nbsp; |&nbsp; &nbsp; ENGINEER &nbsp; &nbsp; |&nbsp; &nbsp; ARCHITECT  &nbsp; &nbsp; |&nbsp; &nbsp; DESIGNER</span>
                </p>
                <p class="marquee marquee2">
                    <span>DEVELOPER &nbsp; &nbsp; |&nbsp; &nbsp; ENGINEER &nbsp; &nbsp; |&nbsp; &nbsp; ARCHITECT  &nbsp; &nbsp; |&nbsp; &nbsp; DESIGNER</span>
                </p>
            </div>
        </>
    );
};

export default PhoneComponent;  
