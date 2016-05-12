import React from 'react';
import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput.jsx';

export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {text: 'hogehoge'},
                {text: 'fugafuga'}
            ]
        };

    }
    handleTodoSubmit(todo) {
        let todos = this.state.todos;
        let newTodos = todos.concat([todo]);
        this.setState({todos: newTodos});
    }
    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
                <hr />
                <TodoInput onTodoSubmit={this.handleTodoSubmit.bind(this)} />
            </div>
        );
    }
}