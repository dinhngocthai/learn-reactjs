import React, { useState } from 'react';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'code',
            status: 'new',
        },
    ];
    //su dung state cho bien initTodoList
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setfilterStatus] = useState('all');
    //tao 1 ham thong bao khi nhan vao
    const handleTodoClick = (todo, idx) => {
        //muon thay doi phai clone no ra mang moi
        // clone current array to the new one
        const newTodoList = [...todoList];
        console.log(todo, idx);
        // toogle state
        //gop ham newTodoList[idx]= newTodo;

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        //update todo list
        setTodoList(newTodoList);
    }
    const handleShowAllClick = () => {
        setfilterStatus('all');
    };
    const handleShowCompletedClick = () => {
        setfilterStatus('completed');
    };
    const handleShowNewClick = () => {
        setfilterStatus('new');
    };
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    console.log(renderedTodoList);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>

            </div>


        </div>
    );
}

export default TodoFeature;