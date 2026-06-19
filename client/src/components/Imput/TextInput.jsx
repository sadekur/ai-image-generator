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
  const sharedClasses = "w-full text-sm outline-none border-none bg-transparent text-[var(--text_secondary)] focus:outline-none";

  return (
    <div className="flex-1 flex flex-col gap-[4px]">
      <label className="text-xs uppercase text-[var(--text_secondary)] px-[4px]">{label}</label>
      <div
        className="rounded-[8px] bg-transparent text-[var(--text_secondary)] outline-none p-[14px] flex items-center gap-[12px] focus-within:border-[var(--primary)]"
        style={{ border: "0.5px solid rgba(var(--text_secondary-rgb), 0.44)" }}
      >
        {textArea ? (
          <textarea
            name={name}
            rows={rows}
            cols={columns}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handelChange(e)}
            className={sharedClasses}
          />
        ) : (
          <input
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handelChange(e)}
            className={sharedClasses}
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
