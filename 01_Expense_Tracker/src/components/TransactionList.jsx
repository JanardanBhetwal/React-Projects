const TransactionList = ({ transaction }) => {
  return (
    <div className="flex flex-row w-28">
      <div className="left-0">{transaction.text}</div>
      <div className="right-0">{transaction.amount}</div>
    </div>
  );
};

export default TransactionList;
