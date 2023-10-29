import { api } from "../../../app/api";
import { useQuery } from "@tanstack/react-query";

const getPendingChallenges = () => {
    return api.get("/challenge/pending").then((response) => response.data);
};

export const useGetPendingChallengesQuery = () => {
    return useQuery<IChallenge[]>({
        queryKey: ["challenges", "pending"],
        queryFn: getPendingChallenges
    });
};