import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo, editingTodo, editTodo }) {
    const [text, setText] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (editingTodo) {
            setText(editingTodo.text);
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
    }, [editingTodo]);

    const handleAddOrEditTodo = () => {
        if (isEditing) {
            editTodo(editingTodo.id, text);
        } else {
            addTodo(text);
        }
        setText('');
        setIsEditing(false);
    };

    return (
        <div className="todo-form">
            <input
                type="text"
                placeholder="Add a to-do"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddOrEditTodo();
                    }
                }}
            />
            <button onClick={handleAddOrEditTodo}>
                {isEditing ? 'Save' : 'Add'}
            </button>
        </div>
    );
}

export default TodoForm;