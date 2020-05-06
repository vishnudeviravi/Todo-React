import React, {Component} from 'react';
import TodoItem from './TodoItem';
import { removeElementFromArray } from '../Utils/RemoveElementFromArray';

class TodoList extends Component {

    onTodoClick = (i) => {
        const {completed} = this.props.data;
        if (completed.includes(i)){
            completed = removeElementFromArray(i,completed);
            this.props.onUserClick({completed:completed}) 
        }
        else {
            this.props.onUserClick({completed:[...completed,i]})   
        }
    }
   
    render() {
        return <TodoItem  todos = {this.props.data.todos} 
                          onTodoClick = {this.onTodoClick} 
                          completed={this.props.data.completed}
                          filterFlag ={this.props.data.flag}/>
    }
    
}

export default TodoList;