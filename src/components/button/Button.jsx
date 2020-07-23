import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0,
        };
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        
    }

    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1,
        });
    }

    render() {
        return (
            <button onClick={this.handleClick} type="button">{this.props.text} - {this.state.clickCount}</button>
        );
    }
}