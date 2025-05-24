// Define type for API response containing data and status
export type ApiResponse<T> = {
  data: T;
  status: number;
}