import axios from "axios";
import type { ApiResponse } from "../types/ApiResponse";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const userLogin = async (username: string, password: string): Promise<ApiResponse<string>> => {
    let result: ApiResponse<string>;
    console.log(import.meta.env.VITE_BASE_URL);
    
    try {
        const response = await api.post("/user/auth/login",{username, password})
        result = {
            data: response.data,
            status: response.status
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            result = {
                data: error.response?.data ?? "An unexpected error occured",
                status: error.response?.status ?? 500
            }
        } else {
            result = {
                data: "An unexpected error occurred",
                status: 500
            }
        }
        console.log("Following error occured while logging in");
        console.log(error);
    }
    return result;
}



