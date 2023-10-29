import { useAcceptChallengeMutation } from "../api/acceptChallenge";

const AcceptChallenge = ({ challengeId }: { challengeId: string }) => {
    const { mutate } = useAcceptChallengeMutation();

    return (
        <button onClick={() => mutate(challengeId)} className="btn btn-primary">
            Accept
        </button>
    );
};

export default AcceptChallenge;