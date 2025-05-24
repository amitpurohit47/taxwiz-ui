import type { ApiResponse } from "../../types/ApiResponse";
import type { Client } from "../../types/Client";
import { api } from "..";
import axios from "axios";
import type { Error } from "../../types/Error";

export const fetchAllClients = async (): Promise<ApiResponse<Client[] | Error>> => {
    let result: ApiResponse<Client[] | Error>;
    try {
        const response = await api.get("/client/verified");
        result = {
            data: response.data,
            status: response.status
        };
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            result = {
                data: {message: error.message ?? "An unexpected error occurred"},
                status: error.response?.status ?? 500
            };
            console.log(result);
            
        } else {
            // Added error message for data with type Error
            result = {
                data: { message: "An unexpected error occurred" },
                status: 500
            };
        }
        console.error("Error fetching clients:", error);
    }
    return result;
};

export const fetchUnverifiedClients = async (): Promise<ApiResponse<Client[] | Error>> => {
    let result: ApiResponse<Client[] | Error>;
    try {
        const response = await api.get("/client/unverified");
        result = {
            data: response.data,
            status: response.status
        };
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            result = {
                data: {message: error.message ?? "An unexpected error occurred"},
                status: error.response?.status ?? 500
            };
        } else {
            // Added error message for data with type Error
            result = {
                data: { message: "An unexpected error occurred" },
                status: 500
            };
        }
        console.error("Error fetching unverified clients:", error);
    }
    return result;
};

export const fetchUnassignedClients = async (): Promise<ApiResponse<Client[] | Error>> => {
    let result: ApiResponse<Client[] | Error>;
    try {
        const response = await api.get("/client/unassigned");
        result = {
            data: response.data,
            status: response.status
        };
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            result = {
                data: {message: error.message ?? "An unexpected error occurred"},
                status: error.response?.status ?? 500
            };
        } else {
            // Added error message for data with type Error
            result = {
                data: { message: "An unexpected error occurred" },
                status: 500
            };
        }
        console.error("Error fetching unassigned clients:", error);
    }
    return result;
};