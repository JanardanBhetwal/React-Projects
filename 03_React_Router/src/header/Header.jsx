import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0">
      <nav className="flex flex-row justify-between h-16 bg-green-200">
        <div>
          <Link to="/">
            <div className=" h-12 w-12 m-2 bg-red-200">
              <img
                className=""
                src="https://img.freepik.com/premium-photo/logo-letter-j-gold_7023-185158.jpg"
              />
            </div>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row justify-evenly bg-orange-400 h-full w-96">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-sky-500" : "text-rose-500"}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-sky-500" : "text-rose-500"}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-sky-500" : "text-rose-500"}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-sky-500" : "text-rose-500"}`
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
            <button className="bg-red-500">Log in</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
