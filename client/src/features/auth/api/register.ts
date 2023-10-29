import { api } from "../../../app/api";
import { useMutation } from "@tanstack/react-query";
import { setCredentials } from "../authSlice";

const register = async (email: string, password: string): Promise<IUser> => {
    const response = await api.post("/auth/register", { email, password });
    return response.data;
};

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: (credentials: { email: string; password: string }) => register(credentials.email, credentials.password),
        onSuccess: (data) => {
            setCredentials(data);
        }
    });
};