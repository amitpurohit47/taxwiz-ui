import axios from "axios"

export const handleLogin = async (username: string, password: string) => {
    try {
        const response = await axios.post("http://localhost:8080/api/user/auth/login", {
            username, password
        });
        console.log(response.data);
        
    } catch (error) {
        console.log(error);
    }
}