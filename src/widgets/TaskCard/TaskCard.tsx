import classNames from 'classnames';
import DeleteIcon from '../../shared/assets/icons/delete.svg?react';
import EditIcon from '../../shared/assets/icons/edit.svg?react';
import { CircularProgressBar } from '../../shared/ui/CircularProgressBar/CircularProgressBar';
import styles from './TaskCard.module.scss';

export const TaskCard = ({
  task: { id, title, priority, status, progress },
}) => {
  return (
    <div className={styles.taskCard}>
      <div className="flex w-100">
        <span className={styles['task-title']}>Задача</span>
        <span className={styles.task}>{title}</span>
      </div>
      <div className="flex">
        <span className={styles['priority-title']}>Приоритет</span>
        <span className={classNames(styles[`priority--${priority}`], styles.priority)}>
          {priority}
        </span>
      </div>
      <div className={styles['task-status-wrapper']}>
        <button className={classNames(styles[`status--${status}`], styles.status)}>
          {status}
        </button>
      </div>
      <div className={styles.progress}>
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={progress}
        />
      </div>
      <div className={styles.actions}>
        <EditIcon className="mr-20 cp" onClick={() => {}} />
        <DeleteIcon className="cp" onClick={() => {}} />
      </div>
    </div>
  );
};
