import { Task } from 'entities/task/model/types';
import { TaskCard } from 'entities/task/ui/TaskCard';
import { Button } from 'shared/ui/Button';
import styles from './RemovableTaskCard.module.css';

type Props = {
    task: Task;
    onRemove: (taskId: string) => void;
};

export function RemovableTaskCard({ task, onRemove }: Props) {
    const handleRemove = (): void => {
        onRemove(task.id);
    };

    return (
        <div className={styles.card}>
            <TaskCard task={task} />

            <Button key={task.id} onClick={handleRemove}>
                remove
            </Button>
        </div>
    );
}
