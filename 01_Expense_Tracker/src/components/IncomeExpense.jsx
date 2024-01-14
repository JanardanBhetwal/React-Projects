import { useContext } from "react";
import GlobalContext from "../context/Diary";

const IncomeExpense = () => {
  const { income, expense } = useContext(GlobalContext);

  return (
    <div className=" flex flex-row justify-evenly w-36 border border-solid">
      <div>
        Income
        <div>${income}</div>
      </div>
      <div>
        Expense
        <div>${expense}</div>
      </div>
    </div>
  );
};

export default IncomeExpense;
