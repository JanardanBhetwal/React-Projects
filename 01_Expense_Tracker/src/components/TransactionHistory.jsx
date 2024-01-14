import TransactionList from "./TransactionList";
import { useContext } from "react";
import GlobalContext from "../context/Diary";

function TransactionHistory() {
  const { transactions } = useContext(GlobalContext);

  const renderedItems = transactions.map((transaction) => {
    return <TransactionList key={transaction.id} transaction={transaction} />;
  });

  return (
    <div className="p-2 w-60  ">
      <div className="border-b-2 border-gray-500 my-1 font-bold">History</div>
      <div>
        <div>{renderedItems}</div>
      </div>
    </div>
  );
}

export default TransactionHistory;
