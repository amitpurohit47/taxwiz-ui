import axios from "axios";
import type { ApiResponse } from "../../types/ApiResponse";
import { api } from "..";



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



