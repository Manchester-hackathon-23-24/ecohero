import AcceptChallenge from "./AcceptChallenge";
import DenyChallenge from "./DenyChallenge";
import { useState } from "react";

const PendingChallenge = (props: IChallenge) => {
    const [xp, setXp] = useState(0);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={props.image} alt="Challenge" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>
                <p className="text-sm">
            Uploaded by {props.email} on{" "}
                    {new Date(props.createdAt).toLocaleDateString()}
                </p>
                <p>{props.description}</p>
                <input
                    type="number"
                    placeholder="Enter amount of XP"
                    className="input input-bordered input-secondary w-full max-w-xs"
                    value={xp}
                    onChange={(e) => setXp(parseInt(e.target.value))}
                />
                <div className="card-actions">
                    <AcceptChallenge xp={xp} challengeId={props._id} />
                    <DenyChallenge challengeId={props._id} />
                </div>
            </div>
        </div>
    );
};

export default PendingChallenge;