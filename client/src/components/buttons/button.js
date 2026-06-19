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
    <div
      onClick={() => !isDisabled && !isLoading && onClick()}
      className={`rounded-[10px] text-white text-sm font-semibold cursor-pointer transition-all duration-300 ease flex items-center justify-center gap-[6px] h-min px-[24px] py-[10px] max-[600px]:px-[12px] max-[600px]:py-[8px] ${type === "secondary" ? "bg-[var(--secondary)]" : "bg-[var(--primary)]"} ${isDisabled ? "opacity-40 cursor-not-allowed" : ""} ${isLoading ? "opacity-80 cursor-not-allowed" : ""} ${flex ? "flex-1" : ""}`}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "inherit" }}
        />
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </div>
  );
};

export default button;
