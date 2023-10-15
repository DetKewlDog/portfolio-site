export default function TagsList({ tags }) {
    return (
        <ul className="tag-container">
            {tags.map((tag, index) => (
                <li key={index} className="tag">
                    {tag}
                </li>
            ))}
        </ul>
    );
}