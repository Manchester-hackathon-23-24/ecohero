import { api } from "../../../app/api";
import { useMutation } from "@tanstack/react-query";
// import { setCredentials } from "../authSlice";

const login = async (email: string, password: string): Promise<IUser> => {
    return api.post("/auth/login", { email, password }).then((response) => response.data);
};

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (credentials: { email: string; password: string }) => login(credentials.email, credentials.password),
        onSuccess: (data) => {
            // setCredentials(data);
            localStorage.setItem("user", JSON.stringify({ user: data }));
        }
    });
};