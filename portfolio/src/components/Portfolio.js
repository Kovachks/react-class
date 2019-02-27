import React from 'react';
import {NavLink} from 'react-router-dom';
import Project from './Project';

const Portfolio = (props) => {

    return (
    <div>
        <NavLink path="/portfolio/123" component={Project}>Project 123</NavLink>
        {/* <NavLink path="/portfolio/ABC">Project ABC</NavLink> */}
        
    </div>

    )

}


export default Portfolio;