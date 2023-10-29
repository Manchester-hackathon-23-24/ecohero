import Spinner from "../../../components/Spinner";
import { useGetPendingChallengesQuery } from "../api/getPendingChallenges";
import PendingChallenge from "../components/PendingChallenge";

export const Dashboard = () => {
    const { data: challenges, isLoading, isSuccess } = useGetPendingChallengesQuery();

    if (isLoading) {
        return <Spinner />;
    }

    if (!isSuccess) {
        return null;
    }

    return (
        <div className="flex flex-col space-y-4">
            {challenges?.map((challenge) => (
                <PendingChallenge key={challenge._id} {...challenge} />
            ))}
        </div>
    );
};

