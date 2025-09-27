import { RemovableTaskCard } from 'features/taskRemove/ui/RemovableTaskCard';
import { Button } from 'shared/ui/Button';
import { EFilter, useTasks } from '../model/useTask';
import styles from './TaskList.module.css';

export default function TaskList() {
    const { tasks, filter, setFilter, removeTask } = useTasks();
    const handleFilter = (): void => {
        if (filter === EFilter.ALL) {
            setFilter(EFilter.COMPlETED);
        }

        if (filter === EFilter.COMPlETED) {
            setFilter(EFilter.INCOMPLETE);
        }

        if (filter === EFilter.INCOMPLETE) {
            setFilter(EFilter.ALL);
        }
    };

    const handleRemove = (taskId: string): void => {
        removeTask(taskId);
    };

    return (
        <>
            <Button onClick={handleFilter}>{filter}</Button>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <RemovableTaskCard
                        key={task.id}
                        task={task}
                        onRemove={handleRemove}
                    />
                ))}
            </div>
        </>
    );
}
