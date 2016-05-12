import React from 'react';
import Todo from './Todo.jsx';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var todoNodes = this.props.todos.map((todo) => {
            console.log(todo);
            return (
                <Todo>{todo.text}</Todo>
            );
        });
        return (
            <ul>
                {todoNodes}
            </ul>
        );
    }
}