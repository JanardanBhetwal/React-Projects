import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="w-64 relative top-36 h-64 p-8 bg-white border border-gray-300 border-2 shadow-md rounded-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center h-full"
      >
        <label className="my-1 mb-2 text-center text-xl">Enter your name</label>
        <input
          required
          onChange={handleChange}
          value={name}
          className="border border-black shadow-sm rounded-md p-2"
        />
        <Link className="flex items-center " to="/playgame">
          <button className="bg-sky-500  rounded-md p-2 mx-auto mt-4 text-white font-bold">
            Play Game
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
