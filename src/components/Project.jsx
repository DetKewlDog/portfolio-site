function Project({ url, title, img, children }) {
    console.log(img);
    return (
        <a className="descbox project" href={url} target="_blank">
            <img src={img} alt={title}></img>
            <h1>{title} <span className="fas fa-external-link-alt"></span></h1>
            <p>{children}</p>
        </a>
    );
}

export default Project;