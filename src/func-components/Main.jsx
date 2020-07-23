import React, {useState} from 'react';
import PureButton from './PureButton';

import './Main.css';

const Main = () => {
    const [isShow, setShow] = useState(false);

    const toggleShow = () => {
        setShow((show) => !show);
    };

    const textButton = isShow ? 'hide' : 'show';

    const textClass = isShow ? '' : 'invisible';
    return (
        <div>
            Главная страница
            <div className={textClass}>Я есть!</div>
            <div>
                <PureButton onClick={toggleShow} text={textButton} />
            </div>
        </div>
    );
};

export default React.memo(Main);
