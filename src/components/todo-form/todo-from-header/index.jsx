import React from "react";

const TodoFormHeader = () => {
  return (
    <div className="flex justify-between p-3 border-b-2 border-black h-1/5 items-center">
      <div>버튼</div>
      <div className="flex flex-row justify-around ">
        <div className="ml-2">All</div>
        <div className="ml-2">Active</div>
        <div className="ml-2">Complete</div>
      </div>
    </div>
  );
};

export default TodoFormHeader;
