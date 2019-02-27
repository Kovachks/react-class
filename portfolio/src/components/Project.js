import React from 'react';

const Project = (props) => {

    console.log(props.match)

    return (
        <div>This is my project {props.match}</div>
    )
}

export default Project