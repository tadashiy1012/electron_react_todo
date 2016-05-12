import React from 'react';

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTextChange(e) {
        this.setState({text: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
        let text = this.state.text.trim();
        if (!text) {
            return;
        }
        this.props.onTodoSubmit({text: text});
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleTextChange} />
                <button onClick={this.handleSubmit}>add</button>
            </div>
        );
    }
}