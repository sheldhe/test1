import React from "react";
import TodoFormMain from "./todo-form-main";
import TodoFormBottom from "./todo-from-bottom";
import TodoFormHeader from "./todo-from-header";

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
