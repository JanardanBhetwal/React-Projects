//

function Options({ option, onSubmit, disable, color }) {
  const classname = `bg-sky-200 p-2 rounded-md text-white w-60 h-20 m-2 ${color}`;
  return (
    <>
      <button
        onClick={() => {
          onSubmit(option);
        }}
        disabled={disable}
        className={classname}
      >
        {option}
      </button>
    </>
  );
}

export default Options;
