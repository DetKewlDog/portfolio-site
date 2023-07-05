import Project from "../components/Project";

export default function Projects() {
    return (
        <section id="projects">
            <div className="grid-container">
                <Project title="Portfolio Website"
                    url="https://github.com/DetKewlDog/portfolio-site"
                    img="images/projects/portfolio-site.png"
                >
                    This portfolio website's repo! Built using ReactJS. Feel free to star it on GitHub!
                </Project>
                <Project title="Forgescape"
                    url="https://www.youtube.com/playlist?list=PLhFxqiJA0WlWNxFYUh4fKYkagRRgUSL_f"
                    img="images/projects/forgescape.png"
                >
                    2D TopDown Adventure game where you are able to fight monsters,
                    obtain powerful items and explore biomes in a procedurally generated world.
                </Project>
                <Project title="BeWarehouse"
                    url="https://detkewldog.itch.io/bewarehouse"
                    img="images/projects/bewarehouse.png"
                >
                    A game that puts players in charge of a busy warehouse operation.
                    Was created as part of the Ludum Dare 53 game jam.
                </Project>
                <Project title="Color Workshop"
                    url="https://colorworkshop.netlify.app/"
                    img="images/projects/color-workshop.png"
                >
                    Minimalistic website that allows palette organization and manipulation,
                    color related operations and image manipulation.
                </Project>
                <Project title="Build Monitor"
                    url="https://github.com/DetKewlDog/build-monitor-v2"
                    img="images/projects/build-monitor.png"
                >
                    Monitor for debugging Unity player logs/builds. Can be run on a LAN.
                    Used to be a Python CLI app, but has been rewritten it using Python & React.
                </Project>
                <Project title="Route Reverse Engineer"
                    url="https://route-reverse-engineer.netlify.app"
                    img="images/projects/route-reverse-engineer.png"
                >
                    Finds all possible starting points that would result in routes with a
                    given walking distance that reach the coordinates of a given destination.
                </Project>
                <Project title="Songsterr Banner Remover"
                    url="https://github.com/DetKewlDog/songsterr-banner-remover"
                    img="images/projects/songsterr-banner-remover.png"
                >
                    Chrome Extension that automatically removes the Songsterr banner
                    that keeps obstructing tabs, for a less cluttered experience.
                </Project>
                <Project title="ForgieBot"
                    url="https://github.com/DetKewlDog/ForgieBot"
                    img="images/projects/forgiebot.png"
                >
                    Discord bot for Forgescape's Discord Server.
                    Includes slash commands for bug reports, releases, suggestions, feedback, etc.
                </Project>
                <Project title="6PM"
                    url="https://github.com/DetKewlDog/6PM"
                    img="images/projects/6pm.png"
                >
                    Discord bot that randomly says random stuff, reacts on messages and does other dumb things.
                    "Trained" on 6AM's messages in the Dot Dev server.
                </Project>
                <Project title="MEE6am"
                    url="https://github.com/DetKewlDog/MEE6AM"
                    img="images/projects/mee6am.png"
                >
                    Discord bot that handles message XP and user levels like MEE6 does.
                    Currently discontinued, might rewrite sometime using a proper database.
                </Project>
                <Project title="C# Snake"
                    url="https://github.com/DetKewlDog/ConsoleSnake"
                    img="images/projects/cs-snake.png"
                >
                    A simple Snake game written in a C# Console Application for fun.
                </Project>
                <Project title="C# Flappy Bird"
                    url="https://github.com/DetKewlDog/ConsoleFlappyBird"
                    img="images/projects/cs-flappy-bird.png"
                >
                    A simple Flappy Bird game written in a C# Console Application for fun.
                </Project>
                <Project title="C# Connect Four"
                    url="https://github.com/DetKewlDog/ConsoleConnectFour"
                    img="images/projects/cs-connect-four.png"
                >
                    A simple Connect Four game written in a C# Console Application for fun.
                </Project>
                <Project title="KewlEngine"
                    url="https://github.com/DetKewlDog/KewlEngine"
                    img="images/projects/kewl-engine.png"
                >
                    Experimental C++ project. Trying to implement CLI rendering.
                    Drawing is pretty slow. Might use WinAPI to create a custom window in the future.
                </Project>
                <Project title="English to Standard Galactic ABC"
                    url="https://gist.github.com/DetKewlDog/4e8f3366e58739735cdb9c0e6c4e049c"
                    img="images/projects/galactic-abc.png"
                >
                    Short program written in Python to convert text to Standard Galactic Alphabet.
                    Uses Unicode characters as the letters.
                </Project>
                <Project title="Color Palette Swapper"
                    url="https://gist.github.com/DetKewlDog/91ad74431f93c671e5600da403f271af"
                    img="images/projects/color-palette-swapper.png"
                >
                    Program that searches a color palette on the internet, and swaps the
                    palette of a given image with the new palette based on color similarity.
                </Project>
                <Project title="Nokia Cellphone FC Font Generator"
                    url="https://gist.github.com/DetKewlDog/0ffb3adaeccec0643a66d6c2e71073e1"
                    img="images/projects/nokia-fc-font-generator.png"
                >
                    Python program to convert text to the Nokia Cellphone FC font (in image form).
                </Project>
            </div>
        </section>
    );
}