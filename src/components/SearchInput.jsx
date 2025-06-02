import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ onChange }) => {
  return (
    <>
      <div className="mb-5">
        <form action="#" className="mx-auto max-w-[443px] h-[44px] relative">
          <input
            type="search"
            placeholder="Rechercher ici..."
            aria-label="Search"
            onChange={onChange}
            className="max-w-[443px] w-full h-full bg-white dark:bg-gray-800 rounded-lg  pl-4 border-1 border-indigo-500"
          />

          <button className="absolute to-50% right-4 translate-y-1/2">
            <CiSearch className="fill-indigo-500" size="22px" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchInput;
