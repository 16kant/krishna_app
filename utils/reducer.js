import {v4 as uuidv4} from 'uuid';

export default (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      if (!action.payload) {
        return state;
      }
      if (
        state.todos.findIndex(
          todo => todo.text.toLowerCase() === action.payload.toLowerCase()
        ) > -1
      ) {
        return state;
      }
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      const newTodos = [...state.todos, newTodo];

      return {
        ...state,
        todos: newTodos
      };
    }

    case 'TOOGLE_TODO': {
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? {...todo, complete: !todo.complete}
          : todo
      );

      return {
        ...state,
        todos: toggledTodos
      };
    }

    case 'UPDATE_TODO': {
      if (!action.payload.text) {
        return state;
      }
      if (
        state.todos.findIndex(
          todo => todo.text.toLowerCase() === action.payload.text.toLowerCase()
        ) > -1
      ) {
        return state;
      }
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? {...todo, text: action.payload.text}
          : todo
      );

      return {
        ...state,
        todos: updatedTodos
      };
    }

    case 'DELETE_TODO': {
      const newTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );

      return {
        ...state,
        todos: newTodos
      };
    }

    default:
      return state;
  }
};
