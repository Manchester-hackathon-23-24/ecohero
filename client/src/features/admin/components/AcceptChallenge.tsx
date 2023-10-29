import { useAcceptChallengeMutation } from "../api/acceptChallenge";

const AcceptChallenge = ({ challengeId, xp }: { challengeId: string, xp: number }) => {
    const { mutate } = useAcceptChallengeMutation();

    const acceptChallenge = () => {
        mutate({ challengeId, xp });
    };

    return (
        <button onClick={acceptChallenge} className="btn btn-primary">
            Accept
        </button>
    );
};

export default AcceptChallenge;