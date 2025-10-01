import { type Task } from '../model/types';
import styles from './TaskCard.module.css';

type Props = {
    task: Task;
};

export function TaskCard({ task }: Props) {
    const status = task.completed ? 'completed' : 'incompleted';

    return (
        <div className={styles.card}>
            <h1>{task.title}</h1>
            <div className={styles[status]}>{status}</div>
        </div>
    );
}
