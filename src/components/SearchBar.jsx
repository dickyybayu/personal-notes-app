import React from "react";

function SearchBar({ search, onSearch }) {
  return (  
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={onSearch}
        placeholder="Search notes"
      />
    </div>
  );
}


export default SearchBar;