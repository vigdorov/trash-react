import React from 'react';

const PureButton = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
};

export default React.memo(PureButton);
