"use client";

import { todoListAtom } from "@/recoil/atom/todoAtom";
import { useRecoilState } from "recoil";
import { removeItemAtIndex, replaceItemAtIndex } from "@/helpers";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const index = todoList.findIndex((el) => el === item);

  function toggleComplete() {
    const newTodoList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newTodoList);
  }

  function deleteTodo() {
    const newTodoList = removeItemAtIndex(todoList, index);
    setTodoList(newTodoList);
  }

  return (
    <div className="inline-flex justify-between text-lg font-medium rounded-md bg-lime-200 py-2 px-4">
      <span className={item.isComplete ? "line-through text-gray-500" : ""}>
        {item.text}
      </span>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleComplete}
          className="mr-2 p-4 w-4 h-4"
        />
        <span
          onClick={deleteTodo}
          className="text-red-600 font-bold cursor-pointer transition hover:scale-125"
        >
          X
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
