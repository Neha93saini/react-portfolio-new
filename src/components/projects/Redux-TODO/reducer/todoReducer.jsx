const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, data } = action.payload;
      return {
        ...state, list: [...state.list, { //eslint-disable-line
          id,
          data,
        }],
      };
    }
    case 'REMOVE_TODO': {
      let newList = state.list.filter(item => item.id !== action.payload.id); //eslint-disable-line
      return {//eslint-disable-line
        ...state, list: newList//eslint-disable-line
      };//eslint-disable-line
    }

    default: return state;
  }
};
export default todoReducers;
