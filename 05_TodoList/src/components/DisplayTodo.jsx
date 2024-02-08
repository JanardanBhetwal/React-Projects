import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function DisplayTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeTodo(id));
  };

  const renderedData = todos.map((todo) => {
    return (
      <div
        className="flex border-2 border-gray-200 m-1 p-1 px-2 rounded-md justify-between"
        key={todo.id}
      >
        <div className="text-xl">{todo.text}</div>
        <button
          className="text-red-500 font-bold text-2xl"
          onClick={() => handleClick(todo.id)}
        >
          X
        </button>
      </div>
    );
  });
  return <div className="flex flex-col w-full m-auto mt-4">{renderedData}</div>;
}

export default DisplayTodo;
