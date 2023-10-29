import Spinner from "../../../components/Spinner";
import { useGetAcceptedChallengesQuery } from "../api/getAcceptedChallenges";
import Challenge from "./Challenge";

export const ChallengesList = () => {
    const { data: challenges, isLoading, isSuccess } = useGetAcceptedChallengesQuery();

    if (isLoading) {
        return <Spinner />;
    }

    if (!isSuccess) {
        return null;
    }

    return (
        <div className="flex space-x-4 w-full">
            {challenges?.map((challenge) => (
                <Challenge key={challenge._id} {...challenge} />
            ))}
        </div>
    );
};
