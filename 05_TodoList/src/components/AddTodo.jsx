import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="flex justify-evenly p-1 w-full ">
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="border w-3/4 border-black rounded-md m-2 pl-1  "
        />
        <button className="bg-green-500 p-1 rounded-md m-2 w-16">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
