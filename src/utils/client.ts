import React from "react";
import { ClientTable } from "./ClientTable";
import { AssignEmployeeDropdown } from "./AssignEmployeeDropdown";

type Client = {
  id: string;
  name: string;
  gstNo: string;
  email: string;
  phone: string;
  address: string;
  assignedEmployee?: { id: string; name: string };
  isVerified: boolean;
};

type Employee = {
  id: string;
  name: string;
};

// Props you can enhance later by fetching from API
type ClientsProps = {
  clients: Client[];
  employees: Employee[];
  onAssign: (clientId: string, employeeId: string) => void;
};

export const Clients: React.FC<ClientsProps> = ({
  clients,
  employees,
  onAssign,
}) => {
  const verifiedClients = clients.filter(
    (c) => c.isVerified && c.assignedEmployee
  );
  const unverifiedClients = clients.filter((c) => !c.isVerified);
  const unassignedClients = clients.filter(
    (c) => c.isVerified && !c.assignedEmployee
  );

  const verifiedColumns = [
    { accessorKey: "id", header: "Client ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "gstNo", header: "GST No" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "address", header: "Address" },
    {
      id: "managedBy",
      header: "Managed By",
      cell: ({ row }: any) => row.original.assignedEmployee?.name ?? "N/A",
    },
  ];

  const unverifiedColumns = verifiedColumns.slice(0, -1); // Remove 'Managed By'

  const unassignedColumns = [
    ...unverifiedColumns,
    {
      id: "assign",
      header: "Action",
      cell: ({ row }: any) => (
        <AssignEmployeeDropdown
          employees={employees}
          onAssign={(employeeId) => {
            onAssign(row.original.id, employeeId);
          }}
        />
      ),
    },
  ];

  return (
    <div className="p-4 space-y-12">
      <section>
        <h2 className="text-xl font-semibold mb-2">✅ Verified Clients</h2>
        <ClientTable data={verifiedClients} columns={verifiedColumns} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">❌ Unverified Clients</h2>
        <ClientTable data={unverifiedClients} columns={unverifiedColumns} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">⚠️ Unassigned Clients</h2>
        <ClientTable data={unassignedClients} columns={unassignedColumns} />
      </section>
    </div>
  );
};
