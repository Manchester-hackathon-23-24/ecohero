const Challenge = (props: IChallenge) => {
    return (
        <div className="card card-side shadow-xl drop-shadow-lg flex-1 max-h-fit text-neutral bg-white">
            <figure>
                <img
                    className="object-cover rounded-xl rounded-r-none"
                    src={props.image}
                    alt="Challenge"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <p className="font-bold text-success-content">GAINED XP: {props.xp}</p>
                <div className="card-actions mt-auto">
                    <button className="btn btn-primary text-white">Join</button>
                    <button className="btn btn-ghost">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Challenge;
