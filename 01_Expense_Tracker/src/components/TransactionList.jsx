import { useContext } from "react";
import GlobalContext from "../context/Diary";
import { MdDeleteForever } from "react-icons/md";

const TransactionList = ({ transaction }) => {
  const { removeData } = useContext(GlobalContext);

  function handleClick() {
    removeData(transaction.id);
  }

  const sign = transaction.amount >= 0 ? "+" : "-";
  const color = transaction.amount < 0 ? "bg-red-500" : "bg-green-500";
  const dash = `w-0.5 ml-2  ${color}`;

  return (
    <div className="flex flex-row my-1 bg-white rounded p-1 ">
      <button onClick={handleClick} className="">
        <MdDeleteForever />
      </button>
      <div className="left-0 text-left">{transaction.text}</div>
      <div className="right-0 text-right ml-auto">
        {sign}${Math.abs(transaction.amount)}
      </div>
      <div className={dash}></div>
    </div>
  );
};

export default TransactionList;
