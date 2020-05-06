import React from 'react';

const todoItem = ({todos, onTodoClick,completed, filterFlag }) => {

    if (!todos) {
        return <>loading..</>;
    }   

    if (filterFlag) {
        const todoItem = todos.map ((todo, i)=>{
            return <p  key = {i} style = {completed.includes(todo) ?{textDecoration:"line-through"}:{textDecoration:"none"}} 
                             onClick={()=>onTodoClick(todo)}>{todo}</p>;})
        return <>{todoItem}</>
    }
    else {
        const todoItem = completed.map((todo,i)=>{
            return <p  key = {i} style = {{textDecoration:"line-through"}} 
                             onClick={()=>onTodoClick(todo)}>{todo}</p>;})
        return <>{todoItem}</>
    }
    
}

export default todoItem;