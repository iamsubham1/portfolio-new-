import React, { useState, useEffect } from 'react';
import SocialMediaSideBar from '../components/SocialMediaSideBar';
const Home = () => {


    return (<>
        <div className='Homepage' id='homepage'>
            <SocialMediaSideBar className='place-self-start' /> {/* Keep the sidebar on the left */}
            <div className='heroElement max-w-[100%] max-h-[100vw] top-[-12%] flex justify-center' >
                <div className='bg-[#20202034] max-w-[50%] max-h-[70%] text-[#949494] text-center flex flex-col justify-center items-center rounded-xl'><h1>SUBHAM DAS</h1>
                    <h2>WEB DEVELOPER</h2></div>
            </div>
        </div>
    </>
    );
};

export default Home;
