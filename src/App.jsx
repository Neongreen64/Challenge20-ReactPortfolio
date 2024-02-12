import React, { useState } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import './App.css'

// Define function App.
function App() {
    const [selectedSection, setSelectedSection] = useState('about'); // Defaulting to 'about' section

    // Function to handle section change
    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };

    // Render content based on selected section
    let content;
    switch (selectedSection) {
        case 'portfolio':
            content = <Portfolio />;
            break;
        case 'about':
            content = <AboutMe />;
            break;
        case 'resume':
            content = <Resume />;
            break;
        case 'contact':
            content = <Contact />;
            break;
        default:
            content = <AboutMe />; // Default to 'About Me' section
    }

    return (
        <div>
            <Header selectedSection={selectedSection} onNavClick={handleSectionChange} />
            {content}
            <Footer />
        </div>
    );
}

export default App;