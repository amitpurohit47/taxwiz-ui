import { userLogin } from "../api/auth";
import type { ApiResponse } from "../types/ApiResponse";

export const handleLogin = async (
  username: string,
  password: string,
  setUsername: Function,
  setPassword: Function,
  setUsernameError: Function,
  setPasswordError: Function
) => {
  const response: ApiResponse<string> = await userLogin(username, password);
  if (response.status == 200) {
    console.log("Login Success");
    localStorage.setItem("authToken", response.data);
    return;
  }
  setUsername("");
  setPassword("");
  if (response.status == 404) {
    console.log("User not found");
    setUsernameError(response.data);
  } else if (response.status == 401) {
    console.log("Invalid Credentials");
    console.log(response.data);
    
    setPasswordError(response.data);
    setUsernameError("Invalid Credentials");
  } else if (response.status == 500) {
    console.log("Server Error");
    setUsernameError("Server Error");
    setPasswordError("Server Error");
  } else {
    console.log("Unknown Error");
    setUsernameError("Unknown Error");
    setPasswordError("Unknown Error");
  }
};
