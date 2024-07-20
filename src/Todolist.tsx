import { TaskProps } from "./App";
import { Button } from "./Button";

type TodolistProps = {
  title: string;
  tasks: Array<TaskProps>;
  date?: string;
};

export const Todolist = ({ title, tasks, date }: TodolistProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title="+" />
      </div>
      {tasks.length === 0 ? (
        <p>Тасок больше нет!</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" defaultChecked={task.isDone} />
                <span>{task.title}</span>
              </li>
            );
          })}
        </ul>
      )}

      <div>
      <Button title="All" />
      <Button title="Active" />
      <Button title="Completed" />
      </div>
      <div>{date}</div>
    </div>
  );
};
