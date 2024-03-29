import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

let initialData;
const getData = localStorage.getItem("lists");
if (getData) {
  initialData = JSON.parse(getData);
} else {
  initialData = [];
}

function Provider({ children }) {
  const [transactions, setTransactions] = useState(initialData);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    let inc = 0;
    let exp = 0;

    transactions.map((transaction) => {
      let amt = transaction.amount;
      if (amt >= 0) {
        inc += parseInt(amt);
      } else {
        exp += parseInt(amt);
      }
    });

    localStorage.setItem("lists", JSON.stringify(transactions));

    setIncome(inc);
    setExpense(exp);
    setBalance(inc + exp);
  }, [transactions]);

  const generateId = () => {
    return parseInt(Math.random() * 1000);
  };

  const addData = (text, amount) => {
    const data = { id: generateId(), text: text, amount: amount };
    const updatedData = [...transactions, data];

    setTransactions(updatedData);
  };

  const removeData = (id) => {
    const updatedData = transactions.filter((transaction) => {
      return transaction.id != id;
    });

    setTransactions(updatedData);
  };

  const editData = (id, newText, newAmount) => {
    let newData = { id: id, text: newText, amount: newAmount };

    const updatedData = transactions.map((transaction) => {
      if (transaction.id === newData.id) {
        return { ...transaction, ...newData };
      }

      return transaction;
    });

    setTransactions(updatedData);
  };

  const valueToShare = {
    transactions,
    addData,
    removeData,
    editData,
    income,
    expense,
    balance,
  };

  return (
    <GlobalContext.Provider value={valueToShare}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { Provider };
