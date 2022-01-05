import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ToDoList from "./toDoList";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
  rootElement
);
