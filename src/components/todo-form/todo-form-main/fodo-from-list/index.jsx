import React from "react";

const TodoFormList = () => {
  return (
    <div className="flex justify-between flex-col">
      <div className="flex justify-between ">
        <div>
          <input type="checkbox" className="mr-2" />
          <span>안녕하세요</span>
        </div>
        <div className="w-10 text-center">삭제</div>
      </div>
      <div className="flex justify-between ">
        <div>
          <input type="checkbox" className="mr-2" />
          <span>안녕하세요</span>
        </div>
        <div className="w-10 text-center">삭제</div>
      </div>
    </div>
  );
};

export default TodoFormList;
