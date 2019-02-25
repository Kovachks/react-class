import React from 'react';

const Action = (props) => (
    <div>
        <button 
            className="big-button"
            disabled={props.hasOptions ? false: true}
            onClick={props.handlePickOption}
        >
            What should I do?
        </button>
    </div>
)


export default Action