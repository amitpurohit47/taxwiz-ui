import { useState } from "react";
import type { Employee } from "../types/Employee";

type Props = {
  clientId: string;
  employees: Employee[];
  onSelect: (clientId: string, employeeId: string) => void;
};

export default function AssignDropdown({ clientId, employees, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = employees.filter((e) =>
    `${e.uid} ${e.first_name} ${e.last_name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        className="bg-blue-600 text-white px-2 py-1 rounded"
        onClick={() => setOpen(!open)}
      >
        Assign
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-64 bg-white shadow-lg rounded border">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border-b"
            placeholder="Search employee..."
          />
          <ul className="max-h-48 overflow-auto">
            {filtered.map((emp) => (
              <li
                key={emp.uid}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onSelect(clientId, emp.uid);
                  setOpen(false);
                }}
              >
                {emp.uid} - {emp.first_name} {emp.last_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
