export default (state, action) => {
  switch (action.type) {
    case "TOOGLE_TODO": {
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
      return {
        ...state,
        todos: toggledTodos
      };
    }

    case "DELETE_TODO": {
      const newTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: newTodos
      };
    }

    case "ADD_TODO": {
      const newTodo = {
        id: state.todos.length,
        text: action.payload,
        complete: false
      };
      const newTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: newTodos
      };
    }

    default:
      return state;
  }
};
