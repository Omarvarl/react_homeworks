import { useEffect, useState } from 'react';
import { type Task } from 'entities/task/model/types';

export enum EFilter {
    ALL = 'all',
    COMPlETED = 'completed',
    INCOMPLETE = 'incomplete',
}

export interface IUseTask {
    tasks: Task[];
    filter: EFilter;
    setFilter: (filter: EFilter) => void;
    removeTask: (taskId: string) => void;
}

export function useTasks(): IUseTask {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTask, setFilteredTasks] = useState(tasks);
    const [filter, setFilter] = useState(EFilter.ALL);

    useEffect(() => {
        setTasks([
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
        ]);
    }, []);

    useEffect(() => {
        setFilteredTasks(() => {
            if (filter === EFilter.ALL) {
                return tasks;
            }

            return tasks.filter(({ completed }) => {
                return filter === EFilter.COMPlETED
                    ? completed === true
                    : completed === false;
            });
        });
    }, [filter, tasks]);

    const removeTask = (taskId: string): void => {
        setTasks((oldValue) => oldValue.filter(({ id }) => id !== taskId));
    };

    return { tasks: filteredTask, filter, setFilter, removeTask };
}
