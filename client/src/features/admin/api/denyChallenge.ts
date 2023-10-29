import { api } from "../../../app/api";
import { useMutation } from "@tanstack/react-query";

const denyChallenge = (challengeId: string) => {
    return api.delete(`/challenges/${challengeId}`).then((response) => response.data);
};

export const useDenyChallengeMutation = () => {
    return useMutation({
        mutationFn: (challengeId: string) => denyChallenge(challengeId)
    });
};
