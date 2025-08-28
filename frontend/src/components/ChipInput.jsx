import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ChipInput({ label, placeholder, values, setValues }) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === " " && input.trim() !== "") {
      e.preventDefault();
      if (!values.includes(input.trim())) {
        setValues([...values, input.trim()]);
      }
      setInput("");
    }
    if (e.key === "Backspace" && input === "" && values.length > 0) {
      setValues(values.slice(0, -1));
    }
  };

  const removeChip = (chip) => {
    setValues(values.filter((val) => val !== chip));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex flex-wrap items-center gap-2 border rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500">
        {values.map((val, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
          >
            {val}
            <FaTimes
              size={12}
              className="cursor-pointer hover:text-red-500"
              onClick={() => removeChip(val)}
            />
          </span>
        ))}
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 outline-none px-1 py-1"
        />
      </div>
    </div>
  );
}
