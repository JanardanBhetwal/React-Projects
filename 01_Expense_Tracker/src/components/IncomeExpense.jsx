import { useContext } from "react";
import GlobalContext from "../context/Diary";

const IncomeExpense = () => {
  const { income, expense } = useContext(GlobalContext);

  return (
    <div className=" flex flex-row justify-between w-60 bg-white shadow-md rounded p-2">
      <div className="text-center flex-auto border-r border-gray-300">
        <div>Income</div>
        <div className="text-green-600">${income}</div>
      </div>
      <div className=" text-center flex-auto border-l border-gray-300">
        <div>Expense</div>
        <div className="text-red-500">${Math.abs(expense)}</div>
      </div>
    </div>
  );
};

export default IncomeExpense;
