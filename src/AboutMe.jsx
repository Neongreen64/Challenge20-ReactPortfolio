import React from 'react';
import meImage from './images/me.jpg'; // Import the image file

function AboutMe() {
    return (
        <section>
            <h1>About Me</h1>
            <div>
                <img src={meImage} alt="me" />
                <p>I am a software developer. I am currently learning React!</p>
            </div>
        </section>
    );
}

export default AboutMe;
