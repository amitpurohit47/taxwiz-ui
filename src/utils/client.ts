import type { ColumnDef } from "@tanstack/react-table";
import type { Client } from "../types/Client";
import type { Employee } from "../types/Employee";
import  AssignDropdown from "../components/AssignDropdown";

export function getClientColumns(
  mode: "assigned" | "unverified" | "unassigned",
  employees?: Employee[],
  onAssign?: (clientId: string, employeeId: string) => void
): ColumnDef<Client>[] {
  return [
    { header: "Client ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "GST No", accessorKey: "gstNo" },
    { header: "Email", accessorKey: "email" },
    { header: "Phone", accessorKey: "phone" },
    {
      header: mode === "unassigned" ? "Assign" : "Managed By",
      cell: ({ row }) =>
        mode === "unassigned" && employees && onAssign ? (
          <AssignDropdown
            clientId={row.original.id}
            employees={employees}
            onSelect={onAssign}
          />
        ) : (
          row.original.managedBy || "—"
        ),
    },
  ];
}
