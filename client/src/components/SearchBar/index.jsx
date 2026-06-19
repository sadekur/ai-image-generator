import React from "react";

const SearchBar = ({ search, handleChange }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search posts..."
      className="w-full max-w-[600px] px-4 py-2 rounded-lg border border-[var(--text_secondary)]/30 bg-[var(--bgLight)] text-[var(--text_primary)] outline-none focus:border-[var(--primary)] transition-colors duration-200"
    />
  );
};

export default SearchBar;
