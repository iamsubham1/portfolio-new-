import { React, useState } from 'react'
import { getColors } from '../utils/generateColors'; // Assuming the file is in the same directory



const Projects = () => {
    const techStack = ["HTML", "CSS", "React", "Node.js", "Express", "MongoDb", "My-Sql", "Docker", "Git", "AWS"];
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF"]; // Example colors array

    const [colorIndex, setColorIndex] = useState(-1); // Initial color index

    // Function to get a random color index
    const getRandomColorIndex = () => {
        let newIndex = Math.floor(Math.random() * colors.length);
        while (newIndex === colorIndex) {
            newIndex = Math.floor(Math.random() * colors.length);
        }
        setColorIndex(newIndex);
        return newIndex;
    }
    return (
        <div className='mainWrapper flex justify-center items-center' >
            <div className='bg-[#181818] max-w-[70vw] max-h-[84vh] mt-[10vh] flex flex-col justify-center items-center p-5'>
                <div className='max-w-[100%] max-h-[28%]  mb-4 flex justify-between  '>
                    <div className='bg-[#1c1c1c] max-h-[100%] max-w-[55%] rounded-xl p-2 text-left '>
                        <h2 className='text-xl mb-2 text-[#99BE2E] poppins'>Connect messaging app</h2>
                        <p className='text-[#cfcfcf]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ligula at odio semper faucibus. Sed ullamcorper velit non consectetur pharetra. Intege gula at odio semper faucibus. Sed ullamcorper velit non consectetur pharetra. </p>
                    </div>
                    <div className=' max-h-[100%]  max-w-[43%]'></div>

                </div>
                <div className='max-w-[100%] max-h-[28%] mb-4 flex justify-between '>
                    <div className=' max-h-[100%] max-w-[43%] '>

                    </div>
                    <div className='bg-[#1c1c1c] max-h-[100%]  max-w-[55%] rounded-xl text-right p-2'>
                        <h2 className='text-xl mb-2 poppins text-[#99BE2E]'>Quick-Memo</h2>
                        <p className='text-[#cfcfcf]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ligula at odio semper faucibus. Sed ullamcorper velit non consectetur pharetra. Intege gula at odio semper faucibus. Sed ullamcorper velit non consectetur pharetra. </p>
                    </div>
                </div>
                <button className='mb-4 bg-[#CFFF44] px-2 py-1.5 rounded-md buttonfont '> More Projects</button>
                <div className=' border-2 border-[#99BE2E] rounded-xl shadow flex-col max-h-[28%] justify-center text-center'>

                    <h1>tech stacks</h1>
                    <div className='flex'>

                        <div className='border-red-200 border-2'><p>ds  </p></div>
                        <div><p>sads</p></div>
                        <div><p>sadd</p></div>
                        <div><p>sadsad</p></div>
                        <div><p>sadsad</p></div>
                        <div><p>sadsad</p>
                        </div>
                        <div><p>sadsad</p></div>
                        <div><p>sadsad</p></div>
                        <div><p>sadsad</p></div>
                        <div><p>sadsad</p></div>
                        <div><p>sadsad</p></div>
                        <div><p>sadsad</p></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects
