import axios from 'axios';
import { api } from '..';
import type { ApiResponse } from '../../types/ApiResponse';
import type { Employee } from '../../types/Employee';
import type { Error } from '../../types/Error';

export const fetchVerifiedEmployees = async (): Promise<ApiResponse<Employee[] | Error>> => {
    let result: ApiResponse<Employee[] | Error>;
    try {
        const response = await api.get('/employee/verified');
        result = {
            data: response.data,
            status: response.status
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            result = {
                data: { message: error.message ?? 'An unexpected error occurred' },
                status: error.response?.status ?? 500
            };
        } else {
            result = {
                data: { message: 'An unexpected error occurred' },
                status: 500
            };
        }
        console.error('Error fetching verified employees:', error);
    }
    return result;
}

export const fetchUnverifiedEmployees = async (): Promise<ApiResponse<Employee[] | Error>> => {
    let result: ApiResponse<Employee[] | Error>;
    try {
        const response = await api.get('/employee/unverified');
        result = {
            data: response.data,
            status: response.status
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            result = {
                data: { message: error.message ?? 'An unexpected error occurred' },
                status: error.response?.status ?? 500
            };
        } else {
            result = {
                data: { message: 'An unexpected error occurred' },
                status: 500
            };
        }
        console.error('Error fetching unverified employees:', error);
    }
    return result;
}