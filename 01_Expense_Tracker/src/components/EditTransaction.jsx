import GlobalContext from "../context/Diary";
import { useContext, useState } from "react";

function EditTransaction({ id, text, amount, onSubmit }) {
  const { editData } = useContext(GlobalContext);
  const [newText, setNewText] = useState(text);
  const [newAmount, setNewAmount] = useState(amount);

  function handleTextChange(e) {
    setNewText(e.target.value);
  }

  function handleAmountChange(e) {
    setNewAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editData(id, newText, newAmount);
    onSubmit();
  }

  return (
    <div>
      <form
        className="p-1 mt-1 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex">
          <input
            type="text"
            className=" border border-black rounded w-full mb-2 mr-1 p-1"
            onChange={handleTextChange}
            value={newText}
          />
          <input
            type="number"
            className=" border border-black rounded w-full mb-2 p-1"
            onChange={handleAmountChange}
            value={newAmount}
          />
        </div>
        <button className="bg-green-500 text-white p-1 w-full border border-black rounded">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditTransaction;
