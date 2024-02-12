import React from 'react';
import Project from './Project';
import textEditorImage from './images/text-editor.png';
import socialNetworkImage from './images/social-network.png';
import noteTakingImage from './images/note-taking.png';
import ecommerceImage from './images/ecommerce.png';
import employeeTrackerImage from './images/employee-tracker.png';
import logoGeneratorImage from './images/Logo-Generator.png';

// Define function Portfolio.
function Portfolio() {
    return (
        <section>
            <h2>Portfolio</h2>
            <Project
                image={textEditorImage}
                title="PWA Text Editor"
                deployedLink="https://challenge19-pwa-texteditor-2b14818024f9.herokuapp.com/"
                githubLink="https://github.com/Neongreen64/Challenge19-PWATextEditor"
            />
            <Project
                image={socialNetworkImage}
                title="Social Network API"
                deployedLink="https://github.com/Neongreen64/Challenge18-SocialNetworkApi"
                githubLink="https://github.com/Neongreen64/Challenge18-SocialNetworkApi"
            />
            <Project
                image={noteTakingImage}
                title="Note Taking App"
                deployedLink="https://github.com/Neongreen64/Challenge11-NoteTakingApp"
                githubLink="https://github.com/Neongreen64/Challenge11-NoteTakingApp"
            />
            <Project
                image={ecommerceImage}
                title="Ecommerce Back End"
                deployedLink="https://github.com/Neongreen64/Challenge13-ECommerce-Back-End"
                githubLink="https://github.com/Neongreen64/Challenge13-ECommerce-Back-End"
            />
            <Project
                image={employeeTrackerImage}
                title="Employee Tracker"
                deployedLink="https://github.com/Neongreen64/Challenge12-EmployeeTracker"
                githubLink="https://github.com/Neongreen64/Challenge12-EmployeeTracker"
            />
            <Project
                image={logoGeneratorImage}
                title="Logo Generator"
                deployedLink="https://github.com/Neongreen64/Challenge10-LogoGenerator"
                githubLink="https://github.com/Neongreen64/Challenge10-LogoGenerator"
            />
        </section>
    );
}

export default Portfolio;
