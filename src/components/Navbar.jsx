import AnimatedLink from "./AnimatedLink";

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><span className="unselectable"><b>DetKewlDog</b></span></li>
                <li><AnimatedLink dir="<-" to="/">Home</AnimatedLink></li>
                <li><AnimatedLink dir="->" to="/projects">Projects</AnimatedLink></li>

                <li><a target="_blank" className="fab fa-steam"     href="https://steamcommunity.com/id/DetKewlDog/"></a></li>
                <li><a target="_blank" className="fab fa-reddit"    href="https://www.reddit.com/user/DetKewlDog"   ></a></li>
                <li><a target="_blank" className="fab fa-discord"   href="https://discord.com/invite/F7VQ2hwfyw"    ></a></li>
                <li><a target="_blank" className="fab fa-youtube"   href="https://youtube.com/@autumnfire_dev"      ></a></li>
                <li><a target="_blank" className="fab fa-github"    href="https://github.com/DetKewlDog"            ></a></li>
                <li>
                    <a className="fas fa-bars">
                        <input type="checkbox" />
                    </a>
                </li>
            </ul>
        </div>
    );
}