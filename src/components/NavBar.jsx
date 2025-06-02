import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-blue-700 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <nav className="bg-blue-400 border-b border-blue-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <Link className="flex flex-shrink-0 items-center mr-4" to="/">
                <span className="hidden md:block text-white font-tangerine text-3xl font-bold ml-2">
                  MandrivkaUA
                </span>
              </Link>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={navClass}>
                    Acceuil
                  </NavLink>
                  <NavLink to="/articles" className={navClass}>
                    Articles
                  </NavLink>
                  <NavLink to="/add-article" className={navClass}>
                    Ajouter Article
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
