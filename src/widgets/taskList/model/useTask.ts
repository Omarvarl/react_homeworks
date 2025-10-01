import { useCallback, useMemo, useState } from 'react';
import { type Task } from 'entities/task/model/types';

export enum EFilter {
    ALL = 'all',
    COMPLETED = 'completed',
    INCOMPLETE = 'incomplete',
}

export interface IUseTask {
    tasks: Task[];
    filter: EFilter;
    setFilter: (filter: EFilter) => void;
    removeTask: (taskId: string) => void;
    addTask: () => void;
    toggleStatus: (taskId: string) => void;
}

export function useTasks(): IUseTask {
    const [filter, setFilter] = useState(EFilter.ALL);
    const initialTasks = useMemo(
        () => [
            { id: '1', title: 'task1', completed: true },
            { id: '2', title: 'task2', completed: false },
            { id: '3', title: 'task3', completed: true },
            { id: '4', title: 'task4', completed: false },
            { id: '5', title: 'task5', completed: true },
            { id: '6', title: 'task6', completed: true },
            { id: '7', title: 'task7', completed: false },
            { id: '8', title: 'task8', completed: true },
            { id: '9', title: 'task9', completed: false },
            { id: '10', title: 'task10', completed: true },
            { id: '11', title: 'task11', completed: true },
            { id: '12', title: 'task12', completed: false },
            { id: '13', title: 'task13', completed: true },
            { id: '14', title: 'task14', completed: false },
            { id: '15', title: 'task15', completed: true },
        ],
        [],
    );
    const [tasks, setTasks] = useState(initialTasks);

    const filteredTasks = useMemo(() => {
        if (filter === EFilter.ALL) {
            return tasks;
        }

        return tasks.filter(({ completed }) => {
            return filter === EFilter.COMPLETED
                ? completed === true
                : completed === false;
        });
    }, [filter, tasks]);

    const removeTask = useCallback((taskId: string): void => {
        setTasks((oldValue) => oldValue.filter(({ id }) => id !== taskId));
    }, []);

    const addTask = useCallback(() => {
        setTasks((oldValue) => {
            const newTaskId = oldValue.length
                ? (
                      parseInt(oldValue[oldValue.length - 1].id, 10) + 1
                  ).toString()
                : '1';

            return [
                ...oldValue,
                { id: newTaskId, title: `task${newTaskId}`, completed: false },
            ];
        });
    }, []);

    const toggleStatus = useCallback((taskId: string) => {
        setTasks((oldValue) => {
            return oldValue.map((task) => {
                return taskId === task.id
                    ? { ...task, completed: !task.completed }
                    : task;
            });
        });
    }, []);

    return {
        tasks: filteredTasks,
        filter,
        setFilter,
        removeTask,
        addTask,
        toggleStatus,
    };
}
