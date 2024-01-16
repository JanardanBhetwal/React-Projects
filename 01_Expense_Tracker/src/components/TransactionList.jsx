import { useContext, useState } from "react";
import GlobalContext from "../context/Diary";
import { MdDeleteForever } from "react-icons/md";
import { FaPen } from "react-icons/fa6";
import EditTransaction from "./EditTransaction";

const TransactionList = ({ transaction }) => {
  const { removeData } = useContext(GlobalContext);

  const [editShow, setEditShow] = useState(false);

  function handleClick() {
    removeData(transaction.id);
  }

  const handleEditClick = () => {
    setEditShow(!editShow);
  };

  const handleSubmit = () => {
    setEditShow(!editShow);
  };

  const sign = transaction.amount >= 0 ? "+" : "-";
  const color = transaction.amount < 0 ? "bg-red-500" : "bg-green-500";
  const dash = `w-0.5 ml-2 ${color}`;

  let content;
  content = (
    <>
      <div className="left-0 text-left">{transaction.text}</div>
      <div className="right-0 text-right ml-auto">
        {sign}${Math.abs(transaction.amount)}
      </div>
    </>
  );
  if (editShow) {
    content = (
      <>
        <EditTransaction
          onSubmit={handleSubmit}
          id={transaction.id}
          text={transaction.text}
          amount={transaction.amount}
        />
      </>
    );
  }

  return (
    <div className="flex flex-row my-1 bg-white rounded p-1 ">
      <button onClick={handleClick} className="">
        <MdDeleteForever />
      </button>
      <>{content}</>
      <button onClick={handleEditClick} className="ml-2">
        <FaPen />
      </button>
      <div className={dash}></div>
    </div>
  );
};

export default TransactionList;
