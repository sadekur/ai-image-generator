import React from "react";

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handelChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <label className="text-xs text-[var(--text_secondary)] px-1 uppercase">
        {label}
      </label>
      <div className="rounded-[8px] bg-transparent text-[var(--text_secondary)] p-3.5 flex items-center gap-3 border-[0.5px] border-solid border-[rgba(var(--text_secondary-rgb),0.44)] focus-within:border-[var(--primary)]">
        {textArea ? (
          <textarea
            className="w-full text-sm outline-none border-none bg-transparent text-[var(--text_secondary)] focus:outline-none"
            name={name}
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handelChange(e)}
          />
        ) : (
          <input
            className="w-full text-sm outline-none border-none bg-transparent text-[var(--text_secondary)] focus:outline-none"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handelChange(e)}
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;