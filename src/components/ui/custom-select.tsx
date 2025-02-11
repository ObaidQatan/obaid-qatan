import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SelectOption {
  label: React.ReactNode;
  value: string;
}

interface CustomSelectProps {
  defaultValue: string;
  data: SelectOption[];
  placeholder?: React.ReactNode;
  valueDisplay?: React.ReactNode;
  onChange: (value: string) => void;
  className?: string;
  wrapperClassName?: string;
  optionClassName?: string;
  dropdownClassName?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  defaultValue,
  data,
  placeholder,
  valueDisplay,
  onChange,
  className,
  wrapperClassName,
  optionClassName,
  dropdownClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const { isDark } = useDarkMode();

  const handleOptionClick = (option: SelectOption) => {
    setSelectedValue(option.value);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <button
      className={cn("relative", wrapperClassName)}
      onBlur={() => setIsOpen(false)}
    >
      <div
        className={cn(
          "border-none bg-transparent cursor-pointer active:scale-95 duration-200",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue
          ? valueDisplay ??
            data.find((item) => item.value === selectedValue)?.label
          : placeholder}
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute z-10 bg-white border border-gray-300 mt-1 rounded-md shadow animate-in-popup",
            isDark && "bg-gray-600 border-gray-700",
            dropdownClassName
          )}
        >
          {data.map((item) => (
            <div
              key={item.value}
              className={cn(
                "cursor-pointer hover:bg-black/10 px-5 py-4 text-start",
                isDark && "hover:bg-white/10",
                optionClassName
              )}
              onClick={() => handleOptionClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </button>
  );
};

export default CustomSelect;
