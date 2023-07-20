export default function SocialLink({ icon, url }) {
    return (
        <li>
            <a target="_blank"
                name={icon}
                className={`fab fa-${icon}`}
                href={url}
            />
        </li>  
    );
}