import React from 'react';
import Button from '../button/Button';

class Main extends React.Component {
    render() {
        return (
            <div>
                Главная страница

                <Button text="Кнопка" />
                <Button text="Any" />
            </div>
        );
    }
}

export default Main;
