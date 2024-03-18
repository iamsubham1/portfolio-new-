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
        <div className='sidebarContainer max-w-[4%] flex flex-col justify-between items-center p-2 relative  top-[35%] ml-5' style={{ height: '30%' }}>
            {socialMediaIcons.map((icon, index) => (
                <img key={index} src={icon.src} alt={icon.alt} className='hover:scale-125 transition-transform duration-300 cursor-pointer' />))}
        </div>
    );
};

export default SocialMediaSideBar;
