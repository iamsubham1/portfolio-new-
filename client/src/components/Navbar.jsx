import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
    const [activeLink, setActiveLink] = useState(activeSection);

    useEffect(() => {
        setActiveLink(activeSection);
    }, [activeSection]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    // Define class to apply to Navbar when "About" section is active
    const navbarClass = activeLink === "About" ? "aboutActive" : "";

    return (
        <div id='navbarContainer' className={navbarClass}>
            <ul>
                {["Home", "About", "Projects", "Contact"].map((linkName) => {
                    // Condition to check if the "About" section is in view and the link is not the active link
                    const isAboutActiveAndNotCurrentLink = activeLink === "About" && activeLink !== linkName;

                    // Dynamically set link style
                    const linkStyle = {
                        color: activeLink === linkName ? "white" : isAboutActiveAndNotCurrentLink ? "#9DC32F" : "initial",
                        transition: 'color 0.3s ease-in-out, transform 0.8s ease-in-out',
                        transform: activeLink === linkName ? 'translateX(0)' : 'translateX(-100%)',
                    };

                    // This style is not altered from your original, as it wasn't specified to change
                    const listItemStyle = {
                        backgroundColor: "transparent", // This could be dynamically set as needed
                    };

                    return (
                        <li key={linkName} style={listItemStyle}>
                            <a href={`#${linkName}`} style={linkStyle} onClick={() => handleLinkClick(linkName)}>
                                {linkName.toUpperCase()}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
