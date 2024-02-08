import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  return (
    <div className="flex flex-col font-sans m-auto my-4 p-2 max-w-md ">
      <span className="text-center font-bold text-2xl">TODO LIST</span>
      <AddTodo />
      <DisplayTodo />
    </div>
  );
}

export default App;
