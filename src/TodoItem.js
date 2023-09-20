import React, { useState } from 'react';

function TodoItem({ todo, editTodo, deleteTodo, setEditingTodo }) {
    const [text, setText] = useState(todo.text);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTodo(todo.id, text);
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <span>{text}</span>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default TodoItem;