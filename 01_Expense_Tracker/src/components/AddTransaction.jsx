import { useState, useContext } from "react";
import GlobalContext from "../context/Diary";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addData } = useContext(GlobalContext);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addData(text, amount);
    setText("");
    setAmount("");
  };

  return (
    <div className=" w-60 p-2">
      <div className="border-b-2 border-gray-500 m-b-2 font-bold">
        Add new Transaction
      </div>
      <form
        className="p-1 mt-1 bg-white rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label>Text</label>
          <input
            required
            type="text"
            value={text}
            onChange={handleTextChange}
            className="border border-black rounded w-full mb-2 p-1"
          />
        </div>
        <div className="flex flex-col">
          <label className="mr-2  flex flex-col">
            Amount
            <div className="text-xs mb-1">
              ( + for income and - for expense )
            </div>
          </label>
          <input
            required
            value={amount}
            onChange={handleAmountChange}
            type="number"
            className=" border border-black rounded w-full mb-2 p-1"
          />
        </div>
        <button className="bg-green-500 text-white p-1 w-full border border-black rounded">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
