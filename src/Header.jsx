import React from 'react';
import Navigation from './Navigation';

// Define function Header.
function Header({ onNavClick }) {
    return (
        <header>
            <h1>My Portfolio</h1>
            <Navigation onNavClick={onNavClick}/>
        </header>
    );
}

export default Header;

