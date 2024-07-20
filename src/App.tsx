import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Todolist } from "./Todolist";

export type TaskProps = {
	id: number
	title: string
	isDone: boolean
}

function App() {
  let tasks1: TaskProps[] = [
    { id: 1, title: "HTML & CSS", isDone: true },
    { id: 2, title: "JS", isDone: false },
    { id: 3, title: "React", isDone: true },
    { id: 4, title: "TypeScript", isDone: false },
    { id: 5, title: "RTC quiry", isDone: true }
  ];

  let tasks2: TaskProps[] = [
    // { id: 1, title: "Terminator", isDone: false },
    // { id: 2, title: "XXX", isDone: true },
    // { id: 3, title: "1+2G", isDone: false }
  ];

  let tasks3: TaskProps[] = [
    { id: 1, title: "Yeh!", isDone: true },
    { id: 2, title: "Bad", isDone: true },
    { id: 3, title: "Last", isDone: true }
  ];

  return (
    <div className="App">
      <Todolist title="What Learn" tasks={tasks1} date={"13.07.2024"} />
      <Todolist title="Movies" tasks={tasks2} />
      <Todolist title="Song" tasks={tasks3} />
    </div>
  );
}

export default App;
