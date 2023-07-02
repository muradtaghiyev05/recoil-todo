"use client";

import { todoListAtom } from "@/recoil/atom/todoAtom";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

const TodoMain = () => {
  const todoList = useRecoilValue(todoListAtom);

  return (
    <>
      <TodoItemCreator />
      {todoList.length > 0 && (
        <div className="flex flex-col text-left w-3/5 gap-2 mt-4">
          {todoList.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoMain;
