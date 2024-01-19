import React from "react";

function LogIn() {
  return (
    <div className="flex items-center justify-center">
      <form className="flex flex-col h-96 w-96 p-8 m-2 bg-gray-200 rounded-md  align-center">
        <div className="flex flex-col m-2">
          <label>Enter username:</label>
          <input
            required
            type="text"
            className="p-2 border rounded-md border-black"
          />
        </div>
        <div className="flex flex-col m-2">
          <label>Enter email id:</label>
          <input
            required
            type="email"
            className="p-2 border rounded-md border-black"
          />
        </div>
        <div className="flex flex-col m-2">
          <label>Enter password:</label>
          <input
            required
            type="password"
            className="p-2 border rounded-md border-black"
          />
        </div>
        <div className="flex justify-center m-4">
          <button className="bg-sky-500 p-2 text-white font-bold rounded-md">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
