import React, {Component} from 'react';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import Filter from './Filter';
import '../css/todo.css';

class App extends Component{

    constructor (props) {
        super(props);
        this.state = {todos : [], completed: [], flag:1};
    }

    onFormSubmit = (todoItem) => {
        this.setState({todos:[...this.state.todos,todoItem]});
    }
    onUserClick = ({completed}) => {
        this.setState({completed:completed});
    }
    filterFunction = (flag) => {
        this.setState({flag})
    }

    render() {
        return (
            <div className='container'>
                <h1>TODO</h1>
                <div className = "searchContainer">
                    <SearchBar onFormSubmit = {this.onFormSubmit}/>
                </div>
                <div className="list-container">
                    <TodoList data= {this.state}
                               onUserClick = {this.onUserClick}/>
                </div>
                <div className="filter">
                    <Filter filterFunction = {this.filterFunction}/>
                </div>
            </div>
        )
    }
}

export default App;