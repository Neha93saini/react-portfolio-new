import React, { useState } from 'react';
import './todo.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/Index';

const Todo = () => {
  const [inputData, setimputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <input
            type="text"
            placeholder="Add Items"
            value={inputData}
            onChange={(event) => setimputData(event.target.value)}
          />
          <i className=" fa-solid fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setimputData(''))}></i> {/*eslint-disable-line */}
        </div>
        <div className="showItems">
          {
            list.map((elem) => {
              {/*eslint-disable-line */ }
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>
                    {elem.data}
                    <span><i className=" far fa-trash-alt remove-btn" title="Delete item" onClick={() => dispatch(deleteTodo(elem.id))} /> {/*eslint-disable-line */}</span>
                  </h3>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};
export default Todo;
