import React from 'react';

function Project({ image,title,deployedLink,githubLink }) {
    return (
        <div className="project">
            <img src = {image} alt = {title} />
            <h2>{title}</h2>
            <div>
                <a href = {deployedLink}>Deployed Link</a>
                <a href = {githubLink}>GitHub Link</a>
            </div>
        </div>
    );
}

export default Project;