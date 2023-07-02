"use client";

import { todoListAtom } from "@/recoil/atom/todoAtom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import uuid from "react-uuid";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const [_, setTodoList] = useRecoilState(todoListAtom);

  function onChange(e) {
    setInputValue(e.target.value);
  }

  function addTodoItem(e) {
    if (inputValue) {
      setTodoList((prevList) => [
        ...prevList,
        {
          id: uuid(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue("");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-3/5">
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="rounded outline-none py-2 px-5 font-normal w-full text-sm"
      />
      <button
        className="rounded bg-slate-50 py-2 px-4 text-base font-semibold transition hover:bg-slate-200"
        onClick={addTodoItem}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoItemCreator;
