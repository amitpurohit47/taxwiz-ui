import React from "react";

type Column<T> = {
  header: string;
  accessor: keyof T;
};

type TableProps<T> = {
  title: string;
  columns: Column<T>[];
  data: T[];
};

export const Table = <T,>({ title, columns, data }: TableProps<T>) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={String(col.accessor)}
                  className="px-4 py-2 text-left font-medium text-gray-600"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                {columns.map((col) => (
                  <td key={String(col.accessor)} className="px-4 py-2">
                    {String(row[col.accessor] ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
