import React from 'react';
import { useSelector } from 'react-redux';

export default function Todo() {
  const todoStore = useSelector(store => store.todoStore)

  const handleAddTodo = (e) => {
  }
  return (
    <div>
      <div className='listTodo'>
      {
        todoStore.data?.map(item =>{
          return <div key={item.id}><h3>{item.todo}</h3><div><span>Check</span><span>Delete</span></div></div>
        })
      }
      </div>
      <div className='formInput'>
        <h3>Add to the todo list</h3>
        <form action="">
          <input type="text" placeholder='Enter your todo' />
          <button type='submit'>Add Item</button>
        </form>
      </div>
    </div>
  );
}

