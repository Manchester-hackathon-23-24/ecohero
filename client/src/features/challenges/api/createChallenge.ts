import { api } from "../../../app/api";
import { useMutation } from "@tanstack/react-query";

const createChallenge = (data: { title: string; description: string; image: string }) => {
    return api.post("/", data).then((response) => response.data);
};

export const useCreateChallengeMutation = () => {
    return useMutation({
        mutationFn: (data: { title: string; description: string; image: string }) => createChallenge(data)
    });
};