import { Task } from 'entities/task';
import { TaskCard } from 'entities/task';
import { Button } from 'shared/ui/Button';
import styles from './RemovableTaskCard.module.css';
import React, { useCallback } from 'react';

type Props = {
    task: Task;
    onRemove: (taskId: string) => void;
    onToggleStatus: (taskId: string) => void;
};

export const RemovableTaskCard = React.memo(
    ({ task, onRemove, onToggleStatus }: Props) => {
        const handleRemove = useCallback((): void => {
            onRemove(task.id);
        }, [task.id, onRemove]);

        const handleToggleStatus = useCallback(() => {
            onToggleStatus(task.id);
        }, [task.id, onToggleStatus]);

        return (
            <div className={styles.card}>
                <TaskCard task={task} onToggleStatus={handleToggleStatus} />

                <Button key={task.id} onClick={handleRemove} label="remove" />
            </div>
        );
    },
);
