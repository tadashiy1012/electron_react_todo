import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compl: false
        };
    }
    handleTodoComplToggle() {
        console.log('call handleTodoComplToggle');
        console.log(this.state);
        this.setState({compl: !this.state.compl});
    }
    render() {
        return (
            <li 
                style={{
                    textDecoration: this.state.compl ? 'line-through' : 'none'
                }}
                onClick={this.handleTodoComplToggle.bind(this)}
            >
                {this.props.children}
            </li>
        );
    }
}