import {
  fetchAllClients,
  fetchUnassignedClients,
  fetchUnverifiedClients,
} from "../api/client";
import type { ApiResponse } from "../types/ApiResponse";
import type { Client } from "../types/Client";
import type { Error } from "../types/Error";

export const fetchClients = async (
  setVerifiedClients: Function,
  setUnverifiedClients: Function,
  setUnassignedClients: Function,
  setVerifiedError: Function,
  setUnverifiedError: Function,
  setUnassignedError: Function
) => {
  const verifiedResponse: ApiResponse<Client[] | Error> =
    await fetchAllClients();
  const unverifiedResponse: ApiResponse<Client[] | Error> =
    await fetchUnverifiedClients();
  const unassignedResponse: ApiResponse<Client[] | Error> =
    await fetchUnassignedClients();

console.log("Verified Response:", verifiedResponse);
console.log("Unverified Response:", unverifiedResponse);
console.log("Unassigned Response:", unassignedResponse);


  // Handle errors for each response with different messages for 401, 403 and others
  if (verifiedResponse.status !== 200) {
    if (verifiedResponse.status === 401) {
      setVerifiedError("Unauthenticated or Bad Credentials");
    } else if (verifiedResponse.status === 403) {
      setVerifiedError(
        {message: "Forbidden: You do not have permission to access verified clients"}
      );
    } else {
      setVerifiedError(
        {message: "An unexpected error occurred while fetching verified clients"}
      );
    }
  } else {
    setVerifiedClients(verifiedResponse.data as Client[]);
    setVerifiedError("");
  }

  if (unverifiedResponse.status !== 200) {
    if (unverifiedResponse.status === 401) {
      setUnverifiedError("Unauthenticated or Bad Credentials");
    } else if (unverifiedResponse.status === 403) {
      setUnverifiedError(
        {message: "Forbidden: You do not have permission to access unverified clients"}
      );
    } else {
      setUnverifiedError(
        {message: "An unexpected error occurred while fetching unverified clients"}
      );
    }
  } else {
    setUnverifiedClients(unverifiedResponse.data as Client[]);
    setUnverifiedError("");
  }

  if (unassignedResponse.status !== 200) {
    if (unassignedResponse.status === 401) {
      setUnassignedError("Unauthenticated or Bad Credentials");
    } else if (unassignedResponse.status === 403) {
      setUnassignedError(
        {message: "Forbidden: You do not have permission to access unassigned clients"}
      );
    } else {
      setUnassignedError(
        {message: "An unexpected error occurred while fetching unassigned clients"}
      );
    }
  } else {
    setUnassignedClients(unassignedResponse.data as Client[]);
    setUnassignedError("");
  }
};

export const fetchVerified = async (
  setVerifiedClients: Function,
  setError: Function
) => {
  const response: ApiResponse<Client[] | Error> = await fetchAllClients();
  console.log(response);
  if (response.status === 200) {
    const verifiedClients = response.data as Client[];
    setVerifiedClients(verifiedClients);
  } else if (response.status === 401) {
    setError({ message: "Unauthenticated or Bad Credentials" });
  } else if (response.status === 403) {
    setError({
      message: "Forbidden: You do not have permission to access this resource",
    });
  } else {
    setError({
      message: "An unexpected error occurred while fetching verified clients",
    });
  }
};

export const fetchUnverified = async (
  setUnverifiedClients: Function,
  setError: Function
) => {
  const response: ApiResponse<Client[] | Error> =
    await fetchUnverifiedClients();
  if (response.status === 200) {
    const unverifiedClients = response.data as Client[];
    setUnverifiedClients(unverifiedClients);
  } else if (response.status === 401) {
    setError({ message: "Unauthenticated or Bad Credentials" });
  } else if (response.status === 403) {
    setError({
      message: "Forbidden: You do not have permission to access this resource",
    });
  } else {
    setError({
      message: "An unexpected error occurred while fetching unverified clients",
    });
  }
};

export const fetchUnassigned = async (
  setUnassignedClients: Function,
  setError: Function
) => {
  const response: ApiResponse<Client[] | Error> =
    await fetchUnassignedClients();
  if (response.status === 200) {
    const unassignedClients = response.data as Client[];
    setUnassignedClients(unassignedClients);
  } else if (response.status === 401) {
    setError({ message: "Unauthenticated or Bad Credentials" });
  } else if (response.status === 403) {
    setError({
      message: "Forbidden: You do not have permission to access this resource",
    });
  } else {
    setError({
      message: "An unexpected error occurred while fetching unassigned clients",
    });
  }
};
