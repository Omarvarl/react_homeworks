import React from 'react';
import { type Task } from '../model/types';
import styles from './TaskCard.module.css';

type Props = {
    task: Task;
    onToggleStatus: () => void;
};

export const TaskCard = React.memo(({ task, onToggleStatus }: Props) => {
    return (
        <div className={styles.card}>
            <h1>{task.todo}</h1>

            <div>
                <label htmlFor={`checkbox_${task.id}`}>completed</label>

                <input
                    id={`checkbox_${task.id}`}
                    type="checkbox"
                    onChange={onToggleStatus}
                    checked={task.completed}
                />
            </div>
        </div>
    );
});
