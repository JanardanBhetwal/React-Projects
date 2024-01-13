import { useState, useContext } from "react";
import GlobalContext from "../context/Diary";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

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
    setAmount(0);
  };

  return (
    <div className="h-24">
      <div>Add new Transaction</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text</label>
          <input type="text" value={text} onChange={handleTextChange} />
        </div>
        <div>
          <label>Amount</label>
          <input value={amount} onChange={handleAmountChange} type="number" />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
