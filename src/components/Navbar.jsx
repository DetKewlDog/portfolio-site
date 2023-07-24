import AnimatedLink from "./AnimatedLink";
import SocialLink from "./SocialLink";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar({ routes }) {
    let location = useLocation();
    let [links, setLinks] = useState(routes.map(route => ({
        to: route.path,
        text: route.text
    })));

    useEffect(() => {
        const currentLink = links.findIndex(link => link.to === location.pathname);

        document.querySelector('link[rel=canonical]').href = window.location.href;
        document.querySelector('title').innerText = links[currentLink].text;

        setLinks(links.map((link, index) => (
            { ...link, dir: index < currentLink ? '<-' : '->' }
        )));
    }, [location]);

    return (
        <nav>
            <div className="navbar">
                <ul>
                    {links.map((link, index) => ( <AnimatedLink key={index} {...link} /> ))}

                    <SocialLink icon="steam"     url="https://steamcommunity.com/id/DetKewlDog/" />
                    <SocialLink icon="reddit"    url="https://www.reddit.com/user/DetKewlDog"    />
                    <SocialLink icon="discord"   url="https://discord.com/invite/F7VQ2hwfyw"     />
                    <SocialLink icon="youtube"   url="https://youtube.com/@autumnfire_dev"       />
                    <SocialLink icon="github"    url="https://github.com/DetKewlDog"             />
                    <li>
                        <a aria-label='Socials' name="Socials" aria-hidden="false">
                            <label for='socials' style={{fontSize: '0'}}>Socials</label>
                            <input id='socials' type="checkbox" aria-hidden="false" />
                            <span className="fas fa-bars"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}