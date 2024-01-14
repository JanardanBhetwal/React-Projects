import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import Balance from "./components/Balance";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center font-sans bg-gray-200 mx-auto">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
