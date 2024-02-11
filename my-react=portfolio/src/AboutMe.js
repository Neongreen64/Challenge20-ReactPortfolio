import React from 'react';

function AboutMe() {
    return (
        <section>
            <h1>About Me</h1>
            <div>
                <img src= {require('./images/me.jpg')} alt="me"/>
                <p>I am a software developer. I am currently learning React!</p>
            </div>
        </section>
    );
}
export default AboutMe;