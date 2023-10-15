export default function IconsList({ list }) {
    return (
        <div id='icons-list'>
            <div className="grid-container">
                {list.map((env, index) => (
                    <img key={index} alt={env}
                        src={`https://skillicons.dev/icons?i=${env}`}
                    ></img>
                ))}
            </div>
        </div>
    );
}