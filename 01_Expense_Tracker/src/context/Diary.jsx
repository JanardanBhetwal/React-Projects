import { createContext, useState } from "react";

const GlobalContext = createContext();

const initialData = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: -10 },
  { id: 5, text: "Internet", amount: -5 },
];

function Provider({ children }) {
  const [transactions, setTransactions] = useState(initialData);

  const addData = (text, amount) => {
    const data = { id: 6, text: text, amount: amount };
    const updatedData = [...transactions, data];

    setTransactions(updatedData);
  };

  const valueToShare = {
    transactions,
    addData,
  };

  return (
    <GlobalContext.Provider value={valueToShare}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
export { Provider };
