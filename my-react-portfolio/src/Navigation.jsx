import React from 'react';

function Navigation({ selectedSection, onNavClick }) {
    return (
        <nav>
            <ul>
                <li className={selectedSection === 'about' ? 'active' : ''}>
                    <button onClick={() => onNavClick('about')}>About</button>
                </li>
                <li className={selectedSection === 'portfolio' ? 'active' : ''}>
                    <button onClick={() => onNavClick('portfolio')}>Portfolio</button>
                </li>
                <li className={selectedSection === 'resume' ? 'active' : ''}>
                    <button onClick={() => onNavClick('resume')}>Resume</button>
                </li>
                <li className={selectedSection === 'contact' ? 'active' : ''}>
                    <button onClick={() => onNavClick('contact')}>Contact</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
