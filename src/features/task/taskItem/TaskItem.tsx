import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "@material-ui/core/Modal";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EventNoteIcon from "@material-ui/icons/EventNote";
import styles from "./TaskItem.module.scss";
import TaskForm from "../taskForm/TaskForm";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={task.completed}
          onClick={() => console.log(`check ${task.id}`)}
          className={styles.checkbox}
        />
        <button onClick={handleOpen} className={styles.edit_button}>
          <EditIcon className={styles.icon} />
        </button>
        <button
          onClick={() => console.log(`delete ${task.id}`)}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_title}>Edit</div>
          <TaskForm edit />
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
