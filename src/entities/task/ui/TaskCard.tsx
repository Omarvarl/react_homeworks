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
            <h1>{task.title}</h1>

            <div>
                <label htmlFor="completeCheckbox">completed</label>

                <input
                    id="completeCheckbox"
                    type="checkbox"
                    onClick={onToggleStatus}
                    checked={task.completed}
                />
            </div>
        </div>
    );
});
