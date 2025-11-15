import classNames from 'classnames';
import Close from '../../shared/assets/icons/close.svg?react';
import { Button } from '../../shared/ui/Button/Button';
import { Input } from '../../shared/ui/Input/Input';
import { Modal } from '../../shared/ui/Modal/Modal';
import styles from './AddEditTaskModal.module.scss';
import "../../shared/styles/index.scss"

export const AddEditTaskModal = () => {
  return (
    <Modal>
      <form>
        <div className={styles['add-edit-modal']}>
          <div className="flx-between">
            <span className={styles['modal-title']}>Добавить задачу</span>
            <Close className="cp" onClick={() => {}} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={() => {}}
            name="title"
            value=""
          />
          <div className={styles['modal-priority']}>
            <span>Приортитет</span>
            <ul className={styles['priority-buttons']}>
              {['high', 'medium', 'low'].map((priority) => (
                <li
                  key={priority}
                  className={classNames(styles[`${priority}-selected`], styles[priority])}
                >
                  {priority}
                </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title="Добавить" onClick={() => {}} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
