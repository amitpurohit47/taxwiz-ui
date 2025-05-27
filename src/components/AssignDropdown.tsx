import React, { useState, useRef, useEffect } from "react";

type Employee = {
  id: string;
  name: string;
};

type AssignEmployeeDropdownProps = {
  employees: Employee[];
  onAssign: (employeeId: string) => void;
};

export const AssignEmployeeDropdown: React.FC<AssignEmployeeDropdownProps> = ({
  employees,
  onAssign,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Assign
      </button>

      {showDropdown && (
        <div className="absolute z-10 mt-2 w-64 bg-white border rounded shadow-md p-2">
          <input
            type="text"
            placeholder="Search employee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border px-2 py-1 mb-2 rounded"
          />
          <ul className="max-h-40 overflow-y-auto">
            {filteredEmployees.map((emp) => (
              <li
                key={emp.id}
                onClick={() => {
                  onAssign(emp.id);
                  setShowDropdown(false);
                }}
                className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded"
              >
                {emp.name} ({emp.id})
              </li>
            ))}
            {filteredEmployees.length === 0 && (
              <li className="text-gray-400 px-2 py-1">No match found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
