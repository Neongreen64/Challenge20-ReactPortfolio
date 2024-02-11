import React from 'react';
import Project from './Project';

function Portfolio() {
    return (
        <section>
            <h2>Portfolio</h2>
            <Project
                image = {require('./images/text-editor.png')}
                title = "PWA Text Editor"
                deployedLink = "https://challenge19-pwa-texteditor-2b14818024f9.herokuapp.com/"
                githubLink = "https://github.com/Neongreen64/Challenge19-PWATextEditor"
            />
            <Project
                image = {require('./images/social-network.png')}
                title = "Social Network API"
                deployedLink = "https://github.com/Neongreen64/Challenge18-SocialNetworkApi"
                githubLink = "https://github.com/Neongreen64/Challenge18-SocialNetworkApi"
            />
            <Project
                image = {require('./images/note-taking.png')}
                title = "Note Taking App"
                deployedLink = "https://github.com/Neongreen64/Challenge11-NoteTakingApp"
                githubLink = "https://github.com/Neongreen64/Challenge11-NoteTakingApp"
            />
            <Project
                image = {require('./images/ecommerce.png')}
                title = "Ecommerce Back End"
                deployedLink = "https://github.com/Neongreen64/Challenge13-ECommerce-Back-End"
                githubLink = "https://github.com/Neongreen64/Challenge13-ECommerce-Back-End"
            />
            <Project
                image = {require('./images/employee-tracker.png')}
                title = "Employee Tracker"
                deployedLink = "https://github.com/Neongreen64/Challenge12-EmployeeTracker"
                githubLink = "https://github.com/Neongreen64/Challenge12-EmployeeTracker"
            />
            <Project
                image = {require('./images/Logo-Generator.png')}
                title = "Logo Generator"
                deployedLink = "https://github.com/Neongreen64/Challenge10-LogoGenerator"
                githubLink = "https://github.com/Neongreen64/Challenge10-LogoGenerator"
            />
        </section>
    );
}

export default Portfolio;