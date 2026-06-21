import { CircularProgress } from "@mui/material";
import React from "react";

const button = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
}) => {
  return (
    <button
      onClick={() => !isDisabled && !isLoading && onClick()}
      disabled={isDisabled || isLoading}
      className={`
        rounded-[10px] text-white text-[14px] font-semibold
        transition-all duration-300 ease
        flex items-center justify-center gap-[6px] h-min
        px-6 py-2.5
        max-[600px]:px-3 max-[600px]:py-2
        ${type === "secondary" ? "bg-[var(--secondary)]" : "bg-[var(--primary)]"}
        ${isDisabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
        ${isLoading ? "opacity-80 cursor-not-allowed" : ""}
        ${flex ? "flex-1" : ""}
      `}
    >
      {isLoading && (
        <CircularProgress
          className="w-[18px] h-[18px] text-inherit"
        />
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </button>
  );
};

export default button;