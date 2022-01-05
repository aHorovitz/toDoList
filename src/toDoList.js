import { useEffect, useState } from "react";
import react from "react";
import "./styles.css";

export default function ToDoList() {
  const [allTasks, setAllTasks] = useState([]);
  const [newTask, setNewTask] = useState({ value: "" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChanged = ({ target }) => {
    setNewTask({
      value: target.value,
      id: currentIndex,
      checked: false
    });
  };

  function onClicked() {
    if (newTask.value === "") return;
    setAllTasks((prev) => {
      return [newTask, ...prev];
    });
    setNewTask({ value: "" });
    setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      onClicked();
    }
  };

  const onCheck = (i) => {
    const task = { ...allTasks[i] };
    task.checked = !task.checked;

    const taskState = [...allTasks];
    taskState[i] = task;

    setAllTasks(taskState);
  };

  return (
    <div>
      <h1>
        <u>
          <b>To Do List</b>
        </u>
      </h1>
      <input
        value={newTask.value}
        onChange={handleChanged}
        onKeyDown={handleKeyPress}
      />
      <button onClick={onClicked} />
      <h1>{newTask.value}</h1>
      <ol>
        {allTasks.map((item, i) => (
          <li>
            {item.checked ? (
              <input
                type="checkbox"
                checked={true}
                onClick={() => onCheck(i)}
              />
            ) : (
              <input
                type="cssheckbox"
                checked={false}
                onClick={() => onCheck(i)}
              />
            )}

            {item.value}
          </li>
        ))}
      </ol>
    </div>
  );
}
