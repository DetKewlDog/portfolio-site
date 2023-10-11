export default function SocialLink({ icon, url }) {
    return (
        <li>
            <a target="_blank"
                name={icon}
                href={url}
                aria-hidden="false"
                aria-label={icon}
            >
                {icon === 'x' ?
                    <span className='fab'>𝕏</span> :
                    <span className={`fab fa-${icon}`}></span>}
            </a>
        </li>  
    );
}