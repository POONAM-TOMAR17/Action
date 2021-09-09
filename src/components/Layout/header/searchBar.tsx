import { State } from '@hookstate/core';
import React from 'react';
import { CloseIcon } from '../../../../static/svg/CloseIcon';
import { SearchIcon } from '../../../../static/svg/SearchIcon';

interface ISearchBar {
  searchActive: State<boolean>;
}

const SearchBar = (props: ISearchBar) => {
  const { searchActive } = props;

  return (
    <div className={`flex items-center relative`}>
      {searchActive.get() && (
        <div className="relative pr-5 flex items-center flex-1">
          <input
            id="site_search"
            type="search"
            name="serch"
            placeholder="Search"
            className="form-input border-0 rounded-none bg-transparent xs:text-base lg:text-sm flex-1 border-b border-customColors-100 focus:border-black focus:outline-none"
          />
        </div>
      )}
      <a
        className="cursor-pointer transform transition-all duration-300 hover:text-customColors-500"
        onClick={() => searchActive.set(!searchActive.get())}
      >
        {searchActive.get() ? <CloseIcon className="w-5 h-5" strokeWidth="1" /> : <SearchIcon />}
      </a>
    </div>
  );
};

export default SearchBar;
