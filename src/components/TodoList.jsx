import Todo from './Todo';

const TodoList = ({ todos, onRemoveTodo, onUptadeTodo }) => {
  return (
    <div style={{ width: '100%', marginTop: '50px' }}>
      {todos &&
        todos.map((todo) => <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUptadeTodo={onUptadeTodo} />)}
    </div>
  );
};

export default TodoList;
