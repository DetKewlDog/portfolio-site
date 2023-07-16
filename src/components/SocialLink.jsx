export default function SocialLink({ icon, url }) {
    return (
        <li>
            <a target="_blank" className={`fab fa-${icon}`} href={url}></a>
        </li>  
    );
}