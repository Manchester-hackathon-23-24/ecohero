import { useMutation } from "@tanstack/react-query";
import { api } from "../../../app/api";

const acceptChallenge = async (challengeId: string) => {
    return api.post(`/challenges/${challengeId}/accept`).then((response) => response.data);
};

export const useAcceptChallengeMutation = () => {
    return useMutation({
        mutationFn: (challengeId: string) => acceptChallenge(challengeId)
    });
};