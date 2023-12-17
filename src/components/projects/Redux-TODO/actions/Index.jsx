export const addTodo = (data) => { // eslint-disable-line
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime().toString(),
      data,
    },
  };
};
export const deleteTodo = (id) => { // eslint-disable-line
  return {
    type: 'REMOVE_TODO',
    payload: {
      id,
    },
  };
};
