import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

const SearchBar = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className="form-control">
        <input
          className="search-bar"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>
          <HiSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
