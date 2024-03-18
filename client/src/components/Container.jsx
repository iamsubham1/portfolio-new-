// Updated Container component with Intersection Observer
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Container = () => {
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: '-40% 0px -40% 0px' });

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar activeSection={activeSection} />
            <div id='container1'>
                <div id='Home' className='Home section backgroundAnimation '>
                    <Home />
                </div>
                <div id='About' className='section bg-[#9DC32F]'>
                    <About />
                </div>
                <div id='Projects' className='section bg-[#090909]'>
                    <Projects />
                </div>
                <div id='Contact' className='section bg-[#090909]'>
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Container;
