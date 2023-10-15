import TagsList from "./TagsList";

export default function Project({ url, title, img, tags, children }) {
    return (
        <a className="descbox project" href={url} target="_blank">
            <div className="project-container">
                <img src={img} alt={title}></img>
                <header>
                    <h1>{title} <span className="fas fa-external-link-alt"></span></h1>
                </header>
                <p>{children}</p>
                <TagsList tags={tags} />
            </div>
        </a>
    );
}