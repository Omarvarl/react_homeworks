/* eslint-disable no-console */
import { Box, Typography } from '@mui/material';
import { useOptimistic, useState } from 'react';

interface ITodo {
    text: string;
}

const todos = [{ text: 'task1' }, { text: 'task2' }, { text: 'task3' }];

export function TodoListOptimistic() {
    const [todoList, setTodoList] = useState(todos);
    const [optimisticTodos, addTodo] = useOptimistic(
        todoList,
        (prev, newTodo: ITodo) => [...prev, newTodo],
    );
    const handleAdd = async (formData: FormData) => {
        const newTodo = { text: formData.get('inputText')?.toString() || '' };

        addTodo(newTodo);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setTodoList((prev) => [...prev, newTodo]);
        console.log('server answer');
    };

    return (
        <form action={handleAdd}>
            <Box sx={{ mb: '30px', mt: '30px', textAlign: 'center' }}>
                <Typography variant="h6">TodoListOptimistic</Typography>

                <input name="inputText" />

                <button>Add</button>

                {optimisticTodos.map(({ text }, index) => (
                    <div key={index}>{text}</div>
                ))}
            </Box>
        </form>
    );
}
