import AnimatedLink from "./AnimatedLink";
import SocialLink from "./SocialLink";

export default function Navbar() {

    return (
        <nav>
            <div className="navbar">
                <ul>
                    <li><span className="unselectable"><b>DetKewlDog</b></span></li>
                    <AnimatedLink to="/">Home</AnimatedLink>
                    <AnimatedLink to="/projects">Projects</AnimatedLink>

                    <SocialLink icon="steam"     url="https://steamcommunity.com/id/DetKewlDog/" />
                    <SocialLink icon="reddit"    url="https://www.reddit.com/user/DetKewlDog"    />
                    <SocialLink icon="discord"   url="https://discord.com/invite/F7VQ2hwfyw"     />
                    <SocialLink icon="youtube"   url="https://youtube.com/@autumnfire_dev"       />
                    <SocialLink icon="github"    url="https://github.com/DetKewlDog"             />
                    <li>
                        <a className="fas fa-bars" aria-hidden="false" name="Socials">
                            <input type="checkbox" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}