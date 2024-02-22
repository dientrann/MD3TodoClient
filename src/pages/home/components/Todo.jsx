import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from '../../../store/slices/todo.slice';
import todoApi from '../../../apis/todo.api';

export default function Todo() {
  const dispatch = useDispatch()
  const todoStore = useSelector(store => store.todoStore)

  const handleAddTodo = async (e) => {
    e.preventDefault()
    try {
      let data = {
        todo: e.target.todo.value
      }
      let result = await todoApi.createTodo(data)
      dispatch(todoAction.addTodo(result.data.data))
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className='listTodo'>
        {
          todoStore.data?.map(item => {
            return <div key={item.id}><h3>{item.todo}</h3><div><span onClick={() => {

            }}>Check</span><span>Delete</span></div></div>
          })
        }
      </div>
      <div className='formInput'>
        <h3>Add to the todo list</h3>
        <form onSubmit={(e) => {
          handleAddTodo(e)
        }}>
          <input type="text" placeholder='Enter your todo' name='todo' />
          <button type='submit'>Add Item</button>
        </form>
      </div>
    </div>
  );
}

