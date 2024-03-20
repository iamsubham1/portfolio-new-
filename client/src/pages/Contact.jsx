import React, { useState } from 'react';

import flap from '../assets/Vector 1.svg'
import { IoMdDownload } from "react-icons/io";

const Contact = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (

        <div className='container flex justify-items-start items-center max-h-[100vh]'>
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

                <form onSubmit={handleSubmit} className='form h-[80%] bg-[#f1f1f1] flex flex-col place-self-center w-[40%] justify-evenly p-4 rounded-md' >
                    <h2 className=' text-3xl text-center'>Reach me out</h2>
                    <input
                        type="text"
                        id="emailOrPhone"
                        name="emailOrPhone"
                        value={formData.emailOrPhone}
                        onChange={handleChange}
                        className='py-1 rounded-md bg-[#f1f1f1] '
                        style={{ border: '2px solid black', color: 'black' }}
                    />


                    <section className='flex flex-col'>
                        <label htmlFor="message">Message:</label>
                        <input
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}

                            className='py-1 rounded-md bg-[#f1f1f1] '
                            style={{ border: '2px solid black', color: 'black' }}
                        /></section>


                    <button type="submit">Submit</button>
                </form>


                <img src={flap} className='relative top-1' />
            </div>

            <div className='max-h-[50%] max-w-[30%] contactCardShadow text-white flex-col flexd poppins'>
                <div className='contactInfo ml-5 max-h-[80%] flex flex-col p-8 font-semibold text-lg text-[#909090]'>
                    <h3>Address:Berhampur,Odisha</h3>
                    <h3>Ph no:9078133097</h3>
                    <h3>Email:myworkemail.subham@gmail.com</h3>

                    <div className='resumeSection flex-1 max-h-[100%] text-xl mt-8'>
                        <h2>DOWNLOAD RESUME</h2>
                        <button type='button' className=' mt-3 text-black w-[8vw] h-[4.5vh] bg-[#c5c5c5] rounded-md text-center flex justify-center items-center hvr-overlay-from-top'>
                            <IoMdDownload />
                        </button>
                    </div>
                </div>

            </div>

            <span className='bg-[#6a6a6a2f] self-end w-[100vw] h-[7vh] absolute items-center flex justify-end'> <p className='mr-5 text-[#9DC32F]'> © This Website is designed and developed by Subham Das </p></span>
        </div>

    )
}

export default Contact
