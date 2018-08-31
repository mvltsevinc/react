import React from 'react';

const userOutput = (props) => {
    return(
        <div>
            <p>{props.username}</p>
            <p>{props.text}</p>
        </div>
    );
};

export default userOutput;