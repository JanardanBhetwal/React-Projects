import TransactionList from "./TransactionList";
import { useContext } from "react";
import GlobalContext from "../context/Diary";

function TransactionHistory() {
  const { transactions } = useContext(GlobalContext);
  const renderedItems = transactions.map((transaction) => {
    return <TransactionList key={transaction.id} transaction={transaction} />;
  });
  return (
    <div>
      History
      <div>
        <div>{renderedItems}</div>
      </div>
    </div>
  );
}

export default TransactionHistory;
