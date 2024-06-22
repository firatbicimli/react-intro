import { IoMdCheckmark, IoMdRemove } from 'react-icons/io';
import { MdEdit } from 'react-icons/md';

import { useState } from 'react';
import '../App.css';

const Todo = ({ todo, onRemoveTodo, onUptadeTodo }) => {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUptadeTodo(request);
    setEditable(false);
  };

  return (
    <div className="todo-list">
      <div>
        {editable ? (
          <input
            style={{ padding: '0px' }}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoMdRemove className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <IoMdCheckmark className="todo-icons" onClick={updateTodo} />
        ) : (
          <MdEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default Todo;
