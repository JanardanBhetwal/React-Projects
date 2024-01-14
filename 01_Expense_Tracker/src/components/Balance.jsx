import { useContext } from "react";
import GlobalContext from "../context/Diary";

const Balance = () => {
  const { balance } = useContext(GlobalContext);

  const textColor = balance < 0 ? "text-red-500" : "text-green-500";

  const classname = `text-center text-3xl font-bold ${textColor}`;

  return (
    <div className="w-60 flex flex-col justify-evenly bg-white my-1 shadow-md p-1 rounded">
      <div className="text-center ">Your Balance:</div>
      <div className={classname}>${balance}</div>
    </div>
  );
};

export default Balance;
