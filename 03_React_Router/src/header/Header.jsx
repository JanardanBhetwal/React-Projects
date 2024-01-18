import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 w-full">
      <nav className="flex flex-row justify-between h-12 bg-gray-400 font-mono text-2xl text-white font-bold">
        <div>
          <Link to="/">
            <div className=" h-10 w-10 m-1">
              <img
                className="rounded-lg"
                src="https://img.freepik.com/premium-photo/logo-letter-j-gold_7023-185158.jpg"
              />
            </div>
          </Link>
        </div>
        <div className="w-3/5">
          <ul className="flex flex-row justify-evenly h-full m-auto items-center">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-white-500"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-white-500"}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-white-500"}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-white-500"}`
                }
                to="/github"
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/login">
            <button className="bg-blue-500 rounded-md p-1 m-1">Log in</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
