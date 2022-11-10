import React from "react";

const TodoFormBottom = () => {
  return (
    <div className="p-4 bg-slate-800 rounded-b-lg h-1/6 flex">
      <input
        type="text"
        className="rounded-l-lg flex-1 text-black pl-2 h-full"
      />
      <button className="bg-orange-400 rounded-r-lg w-20 h-full">Add</button>
    </div>
  );
};

export default TodoFormBottom;
