import React, { useContext } from "react";
import { DarkModeContext } from "../../../contexts/DarkModeContext";

const TodoFormHeader = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="flex justify-between p-3 border-b-2 border-black h-1/5 items-center">
      <div className="cursor-pointer" onClick={toggleDarkMode}>
        버튼 {darkMode.toString()}
      </div>
      <div className="flex flex-row justify-around ">
        <div className="ml-2">All</div>
        <div className="ml-2">Active</div>
        <div className="ml-2">Complete</div>
      </div>
    </div>
  );
};

export default TodoFormHeader;
