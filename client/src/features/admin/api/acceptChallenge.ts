import { useMutation } from "@tanstack/react-query";
import { api } from "../../../app/api";

const acceptChallenge = async ({ challengeId, xp }:  {challengeId: string, xp: number}) => {
    return api.patch(`/challenge/${challengeId}/accept`, { xp }).then((response) => response.data);
};

export const useAcceptChallengeMutation = () => {
    return useMutation({
        mutationFn: ({ challengeId, xp }: { challengeId: string, xp: number }) => acceptChallenge({challengeId, xp})
    });
};