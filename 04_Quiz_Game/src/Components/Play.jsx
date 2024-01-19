//

function Play() {
  return (
    <div className=" h-screen bg-gray-200 flex justify-center">
      <div className="flex flex-col p-8 items-center mt-16 bg-white w-2/5 h-96">
        <div className="bg-rose-500 p-2 rounded-md text-white m-4">
          <p className="font-bold text-2xl text-center">
            Which is the tallest mountain in the world?
          </p>
        </div>
        <div className="flex flex-col justify-evenly text-xl p-4 w-full h-full m-4">
          <div className="flex flex-row justify-between">
            <button className="bg-sky-400 p-2 rounded-md w-1/2 m-2">
              a.Mt.Everest
            </button>
            <button className="bg-sky-400 p-2 rounded-md w-1/2 m-2">
              b.Mt.K2
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <button className="bg-sky-400 p-2 rounded-md w-1/2 m-2">
              c.Mt.Makalu
            </button>
            <button className="bg-sky-400 p-2 rounded-md w-1/2 m-2">
              d.Mt.Fuji
            </button>
          </div>
        </div>
        <div>
          <button className="bg-orange-400 p-2 rounded-md m-2">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Play;
