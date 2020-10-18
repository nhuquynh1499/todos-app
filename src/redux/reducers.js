import { combineReducers } from "redux";

const initialState = {
  list: JSON.parse(localStorage.getItem("todos")) || [],
  activeId: null,
};

const todoReducer = (state = initialState, action) => {
  const { list } = state;

  switch (action.type) {
    case "ADD_TODO": {
      const newList = [...list];
      newList.push(action.payload);

      return {
        ...state,
        list: newList,
      };
    }

    case "REMOVE_TODO": {
      const itemRemove = list.find((item) => item.id === action.payload);
      const indexRemove = list.indexOf(itemRemove);
      const newList = list
        .slice(0, indexRemove)
        .concat(state.list.slice(indexRemove + 1));

      return {
        ...state,
        list: newList,
      };
    }

    case "UPDATE_TODO": {
      const newList = list.map((item) => {
        if (item.id === action.payload) item.isComplete = !item.isComplete;
        return item;
      });
      return {
        ...state,
        list: newList,
      };
    }

    case "EDIT_TODO": {
      if (action.content == "")
        return state;
      const newList = list.map((item) => {
        if (item.id === action.payload) item.content = action.content;
        return item;
      });

      return {
        ...state,
        list: newList,
      };
    }

    case "SET_ACTIVEID": {
      return {
        ...state,
        activeId: action.payload
      }
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
