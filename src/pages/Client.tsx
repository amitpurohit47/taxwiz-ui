import React from "react";
import { Table } from "../components/Table";

type Client = {
  id: string;
  name: string;
  gstNo: string;
  email: string;
  phone: string;
  employee?: string;
};

const columns: { header: string; accessor: keyof Client }[] = [
  { header: "Client ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "GST No", accessor: "gstNo" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
  { header: "Managed By", accessor: "employee" },
];

const verifiedClients: Client[] = [
  {
    id: "C001",
    name: "Acme Corp",
    gstNo: "29ABCDE1234F2Z5",
    email: "info@acme.com",
    phone: "9876543210",
    employee: "John Doe",
  },
];

const unassignedClients: Client[] = [
  {
    id: "C002",
    name: "Beta Inc",
    gstNo: "29ABCDE1234F2Z5",
    email: "beta@inc.com",
    phone: "3829839873"
  }
]

const Clients: React.FC = () => {
  return (
    <div className="p-6 space-y-10">
      <Table title="Verified & Assigned Clients" columns={columns} data={verifiedClients} />
      <Table title="Unverified Clients" columns={columns} data={[]} />
      <Table title="Unassigned Clients" columns={columns} data={unassignedClients} />
    </div>
  );
};

export default Clients;
