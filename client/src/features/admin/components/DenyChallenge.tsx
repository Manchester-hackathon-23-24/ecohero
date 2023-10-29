import { useDenyChallengeMutation } from "../api/denyChallenge";

const DenyChallenge = ({ challengeId }: { challengeId: string }) => {
    const { mutate } = useDenyChallengeMutation();

    return (
        <button onClick={() => mutate(challengeId)} className="btn btn-ghost">
            Deny
        </button>
    );
};

export default DenyChallenge;