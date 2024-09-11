const Todo = ({ name, isTrue }) => {
  if (isTrue) {
    return <h2>Todo List: {name}</h2>;
  } else {
    // return <h2>Todo List: {name}</h2>;
  }
};

export default Todo;
