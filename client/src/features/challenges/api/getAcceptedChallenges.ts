import { api } from "../../../app/api";
import { useQuery } from "@tanstack/react-query";

const getAcceptedChallenges = (): Promise<IChallenge[]> => {
    return api.get("/").then((response) => response.data);
};

export const useGetAcceptedChallengesQuery = () => {
    return useQuery({
        queryKey: ["challenges", "accepted"],
        queryFn: getAcceptedChallenges
    });
};
