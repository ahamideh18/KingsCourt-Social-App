import React from 'react';

const Take = (props) => {
    return (
        <div>
            <h3>{props.text}</h3>
            <h5>{props.likes}</h5>
            <h5>{props.user}</h5>
        </div>
    )
}

export default Take;