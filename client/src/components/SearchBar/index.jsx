import { SearchOutlined } from "@mui/icons-material";
import React from "react";

const SearchBar = ({ search, handleChange }) => {
  return (
    <div className="max-w-[550px] flex w-full border border-solid border-[rgba(var(--text_secondary-rgb),0.56)] rounded-[8px] cursor-pointer px-4 py-3 justify-start items-center gap-1.5 text-[var(--text_secondary)]">
      <SearchOutlined sx={{ color: "inherit" }} />
      <input
        type="text"
        placeholder="Search with prompt or name. . ."
        className="border-none outline-none w-full bg-transparent text-inherit"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchBar;