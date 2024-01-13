import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import Balance from "./components/Balance";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="h-screen flex flex-col items-center font-sans justify-around ">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
