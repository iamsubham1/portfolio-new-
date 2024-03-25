import React from 'react';
import github from '../assets/GitHub.svg';
import instagram from '../assets/Instagram.svg';
import twitter from '../assets/Twitter.svg';
import linkedin from '../assets/LinkedIn.svg';

const SocialMediaSideBar = () => {
    const socialMediaIcons = [
        { src: github, alt: 'Github Logo' },
        { src: instagram, alt: 'Instagram Logo' },
        { src: twitter, alt: 'Twitter Logo' },
        { src: linkedin, alt: 'LinkedIn Logo' }
    ];

    return (
        <div className='sidebarContainer max-w-[12%] flex flex-col justify-between items-center p-2 relative top-[35%] ml-[-2.5%] z-10 sidebarMobile' style={{ maxHeight: '40%' }}>
            {socialMediaIcons.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} className='hover:scale-125 transition-transform duration-300 cursor-pointer max-w-[10vw]' />))}
        </div>
    );
};

export default SocialMediaSideBar;
