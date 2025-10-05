import { useCallback, useEffect, useMemo, useState } from 'react';
import { type Task } from 'entities/task';
import { useGetTasksQuery } from 'features/taskList';

export enum EFilter {
    ALL = 'all',
    COMPLETED = 'completed',
    INCOMPLETE = 'incomplete',
}

export interface IUseTask {
    tasks: Task[];
    filter: EFilter;
    setFilter: (filter: EFilter) => void;
    removeTask: (taskId: number) => void;
    addTask: () => void;
    toggleStatus: (taskId: number) => void;
}

export function useTasks(): IUseTask {
    const { data, isSuccess } = useGetTasksQuery();
    const [filter, setFilter] = useState(EFilter.ALL);
    const [tasks, setTasks] = useState<Task[]>();

    useEffect(() => {
        if (isSuccess) {
            setTasks(data);
        }
    }, [data, isSuccess]);

    const filteredTasks = useMemo(() => {
        if (filter === EFilter.ALL) {
            return tasks;
        }

        return tasks?.filter(({ completed }) => {
            return filter === EFilter.COMPLETED
                ? completed === true
                : completed === false;
        });
    }, [filter, tasks]);

    const removeTask = useCallback((taskId: number): void => {
        setTasks((oldValue) => oldValue?.filter(({ id }) => id !== taskId));
    }, []);

    const addTask = useCallback(() => {
        setTasks((oldValue) => {
            const newTaskId = oldValue?.length
                ? oldValue[oldValue.length - 1].id + 1
                : 1;

            return [
                ...(oldValue || []),
                { id: newTaskId, todo: `task${newTaskId}`, completed: false },
            ];
        });
    }, []);

    const toggleStatus = useCallback((taskId: number) => {
        setTasks((oldValue) => {
            return oldValue?.map((task) => {
                return taskId === task.id
                    ? { ...task, completed: !task.completed }
                    : task;
            });
        });
    }, []);

    return {
        tasks: filteredTasks || [],
        filter,
        setFilter,
        removeTask,
        addTask,
        toggleStatus,
    };
}
