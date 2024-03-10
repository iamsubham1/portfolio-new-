import { React, useState } from 'react'
import { getColors } from '../utils/generateColors';
import connect from '../assets/connect.svg'
import noteBook from '../assets/notebook.svg'


const Projects = () => {
    const techStack = ["HTML", "CSS", "React", "Node.js", "Express", "MongoDb", "My-Sql", "Docker", "Git", "AWS"];

    return (
        <div className='mainWrapper flex justify-center items-center' >
            <div className='max-w-[3vw] max-h-[20vh] sidebar fixed right-[23vw] flex-col text-center vertical-text text-black wrapppp poppins bg-[#CFFF44]'>
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>K</span>
            </div>
            <div className='bg-[#181818] max-w-[50vw] max-h-[84vh] mt-[10vh] flex flex-col justify-center items-center p-5'>
                <div className='max-w-[100%] max-h-[28%]  mb-4 flex justify-between  '>
                    <div className='bg-[#1c1c1c] max-h-[100%] max-w-[55%] rounded-xl p-2 text-left '>
                        <h2 className='text-xl mb-2 text-[#99BE2E] poppins'>Connect messaging app</h2>
                        <p className='text-[#cfcfcf]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ligula at odio semper faucibus. Sed ullamcorper velit non consectetur pharetra. Intege gula at odio semper faucibus. Sed ullamcorper velit non consectetur pharetra. </p>
                    </div>
                    <div className=' max-h-[100%] max-w-[43%] imgflex project1'>
                        <img src={connect} className='h-[100%]' />
                    </div>

                </div>
                <div className='max-w-[100%] max-h-[28%] mb-4 flex justify-between '>
                    <div className=' max-h-[100%] max-w-[43%] project2'>
                        <img src={noteBook} className='h-[100%]' />

                    </div>
                    <div className='bg-[#1c1c1c] max-h-[100%]  max-w-[55%] rounded-xl text-right p-2'>
                        <h2 className='text-xl mb-2 poppins text-[#99BE2E]'>Quick-Memo</h2>
                        <p className='text-[#cfcfcf]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ligula at odio semper faucibus. Sed ullamcorper velit non consectetur pharetra. Intege gula at odio semper faucibus. Sed ullamcorper velit non consectetur pharetra. </p>
                    </div>
                </div>
                <button className='mb-4 bg-[#CFFF44] px-2 py-1.5 rounded-md buttonfont '> More Projects</button>
                <div className=' border-2 border-[#99BE2E] rounded-xl shadow flex-col max-h-[28%] max-w-[60%] text-center flexd'>

                    <h2 className=' text-2xl text-[#99BE2E] poppins'>Tech Stack</h2>
                    <section className=' flex max-w-[90%] flex-wrap h-[60%] gap-2 items-center flexd'> {techStack.map((tech, index) => {
                        return (
                            <span key={index} className='px-2 py-1 border-2 rounded-md techshadow' style={{ borderColor: getColors(), borderWidth: '2px' }}>
                                <p className='text-[#b0b0b0] font-semibold poppins'>{tech}</p>
                            </span>
                        );
                    })}
                    </section>

                </div>
            </div>
        </div>
    )
}

export default Projects
