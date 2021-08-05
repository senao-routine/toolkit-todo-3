import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import styles from "./TaskForm.module.scss";
import { createTask } from "../taskSlice";
import TextField from "@material-ui/core/TextField";

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  // const handleEdit = (data: Inputs) => {
  //   console.log(data);
  // };
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <TextField
          {...register("taskTitle")}
          id="outlined-basic"
          defaultValue={edit ? "Edit Task" : "New Task"}
          variant="outlined"
          name="taskTitle"
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
            <button type="button" className={styles.cancel_button}>
              Cnacel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
