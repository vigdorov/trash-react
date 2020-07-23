import React, {useState, useEffect} from 'react';

const Button = (props) => {
    const [clickCount, setClickCount] = useState(0);

    //didMount
    useEffect(() => {
        console.log('component mounted');
    }, []);

    //didUpdate
    useEffect(() => {
        console.log('component updated');
    });

    //didUpdateByCondition
    useEffect(() => {
        console.log('component updated because clickCount update')
    }, [clickCount]);

    //did Unmount
    useEffect(() => {
        return () => {
            console.log('component unmount');
        };
    }, []);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <button type="button" onClick={handleClick}>{props.text} - {clickCount}</button>
    );
};

export default React.memo(Button);
