import { useState } from "react";

export default function Newsletter() {
  const [activeButton, setActiveButton] = useState("Semua Kelas");

  const filters = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  const baseClass =
    "cursor-pointer relative text-sm md:text-base text-gray-500 transition duration-300 bg-[length:0%_2px] bg-left-bottom bg-no-repeat bg-gradient-to-r from-[var(--orange-color)] to-[var(--orange-color)] hover:bg-[length:100%_2px] hover:text-[var(--orange-color)]";

  const activeClass =
    "text-[var(--orange-color)] bg-[length:100%_2px] bg-left-bottom bg-no-repeat bg-gradient-to-r from-[var(--orange-color)] to-[var(--orange-color)]";

  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-6 w-max px-2">
        {filters.map((label) => (
          <button
            key={label}
            onClick={() => setActiveButton(label)}
            className={`transition-all duration-300 ${
              activeButton === label ? activeClass : baseClass
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
