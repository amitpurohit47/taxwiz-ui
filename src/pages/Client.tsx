import React, { useEffect, useState } from "react";
import { Table } from "../components/Table";
import type { Client } from "../types/Client";
import {
  fetchClients
} from "../services/client";
import Loader from "../components/Loader";
import type { Error } from "../types/Error";

const columns: { header: string; accessor: keyof Client }[] = [
  { header: "Client ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "GST No", accessor: "gstNo" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
  { header: "Managed By", accessor: "employee" },
];

const Clients: React.FC = () => {
  const [verifiedClients, setVerifiedClients] = useState<Client[]>([]);
  const [unverifiedClients, setUnverifiedClients] = useState<Client[]>([]);
  const [unassignedClients, setUnassignedClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [verifiedError, setVerifiedError] = useState<Error | null>(null);
  const [unverifiedError, setUnverifiedError] = useState<Error | null>(null);
  const [unassignedError, setUnassignedError] = useState<Error | null>(null);

  useEffect(() => {
    const getClients = async () => {
      setLoading(true);
      await fetchClients(setVerifiedClients, setUnverifiedClients, setUnassignedClients, setVerifiedError, setUnverifiedError, setUnassignedError);
      setLoading(false);
    };
    getClients();
  }, []);

  // Add a nice loader when the data is being fetched

  return loading ? (
    <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Loader />
      </div>
  ) : (
    <div className="p-6 space-y-10">
      { verifiedError ?  <p className="text-red-500">{verifiedError.message}</p> : <Table
        title="Verified Clients"
        columns={columns}
        data={verifiedClients}
      />}
      { unverifiedError ? <p className="text-red-500">{unverifiedError.message}</p> : <Table
        title="Unverified Clients"
        columns={columns}
        data={unverifiedClients}
      />}
      { unassignedError ? <p className="text-red-500">{unassignedError.message}</p> : <Table
        title="Unassigned Clients"
        columns={columns}
        data={unassignedClients}
      />}
    </div>
  );
};

export default Clients;
