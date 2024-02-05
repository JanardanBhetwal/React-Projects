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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="border border-black rounded-md m-2"
        />
        <button className="bg-green-500 p-1 rounded-md m-2">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
