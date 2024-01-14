import { useContext } from "react";
import GlobalContext from "../context/Diary";

const TransactionList = ({ transaction }) => {
  const { removeData } = useContext(GlobalContext);

  function handleClick() {
    removeData(transaction.id);
  }

  return (
    <div className="flex flex-row ">
      <button onClick={handleClick}>x</button>
      <div className="left-0 text-left">{transaction.text}</div>
      <div className="right-0 text-right ml-auto">${transaction.amount}</div>
    </div>
  );
};

export default TransactionList;
