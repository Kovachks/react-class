import React from 'react';

const Project = (props) => {
    return (
        <div>This is my project {props.match.params.project}</div>
    )
}

export default Project