import { useContext } from "react";
import GlobalContext from "../context/Diary";

const Balance = () => {
  const { balance } = useContext(GlobalContext);

  return (
    <div className="h-16">
      <div>Your Balance</div>
      <div className="text-center">${balance}</div>
    </div>
  );
};

export default Balance;
