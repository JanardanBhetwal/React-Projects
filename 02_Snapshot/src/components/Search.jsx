import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Search({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <div>
      <form
        className="flex flex-row justify-between bg-white w-4/5 m-4 mx-auto p-2 rounded-md"
        onSubmit={handleFormSubmit}
      >
        <div className="m-1 mr-3 my-auto">
          <CiSearch size={24} />
        </div>
        <input
          className="w-full rounded-md border border-gray-300 p-2"
          value={value}
          onChange={handleInputChange}
          type="text"
        />
        <button className="bg-green-500 ml-2 rounded-md p-2">Search</button>
      </form>
    </div>
  );
}

export default Search;
