import React from "react";

function SearchBar({ searchTerm, onSearchChange, onReset }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button onClick={onReset}>Reset Filters</button>
    </div>
  );
}

export default SearchBar;
