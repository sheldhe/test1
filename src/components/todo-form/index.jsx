import React from "react";
import TodoFormMain from "./todo-form-main";
import TodoFormBottom from "./todo-from-bottom";
import TodoFormHeader from "./todo-from-header";

// Total lsit

// const todoList = [
//   { id: 0, title: "안녕하세요.", complete: false },
//   { id: 1, title: "반갑습니다.", complete: false },
//   { id: 2, title: "저의이름은 최대한입니다. ", complete: false },
//   { id: 3, title: "앞으로도 잘부탁드립니다..", complete: false },
// ];

// const tabList = [
//   { id: 0, title: "All", active: true },
//   { id: 1, title: "Active", active: false },
//   { id: 2, title: "All", active: false },
// ];

const TodoForm = () => {
  return (
    <div className="flex flex-col h-96 w-96 bg-slate-700 m-auto rounded-lg shadow-lg text-white">
      <TodoFormHeader />
      <TodoFormMain />
      <TodoFormBottom />
    </div>
  );
};

export default TodoForm;
