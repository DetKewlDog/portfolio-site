import Project from "../components/Project";

function Projects() {
    return <div className="grid-container">
        <Project title="Forgescape"
            url="https://www.youtube.com/playlist?list=PLhFxqiJA0WlWNxFYUh4fKYkagRRgUSL_f"
            img="images/projects/forgescape.png"
        >
            Forgescape is a 2D TopDown Adventure game where you are able to fight monsters,
            obtain powerful items and explore biomes in a procedurally generated world!
        </Project>
        <Project title="BeWarehouse"
            url="https://detkewldog.itch.io/bewarehouse"
            img="images/projects/bewarehouse.png"
        >
            BeWarehouse is a game that puts players in charge of a busy warehouse operation.
            It was created by DetKewlDog and Trampampompa as part of the Ludum Dare 53 game jam.
        </Project>
        <Project title="Color Workshop"
            url="https://colorworkshop.netlify.app/"
            img="images/projects/color-workshop.png"
        >
            Color Workshop is a minimalistic website that allows palette
            organization and manipulation, color related operations and image manipulation.
        </Project>
        <Project title="Build Monitor"
            url="https://github.com/DetKewlDog/build-monitor-v2"
            img="images/projects/build-monitor.png"
        >
            Monitor for Unity player logs. Helps debugging Unity builds. Can be run on a LAN.
            Used to be a Python CLI app which a bit clunky, so I've rewritten it using Python & React.
        </Project>
        <Project title="Songsterr Banner Remover"
            url="https://github.com/DetKewlDog/songsterr-banner-remover"
            img="images/projects/songsterr-banner-remover.png"
        >
            Chrome Extension that automatically removes the Songsterr banner that keeps obstructing tabs,
            providing a less cluttered and more enjoyable experience on Songsterr.
        </Project>
        <Project title="ForgieBot"
            url="https://github.com/DetKewlDog/ForgieBot"
            img="images/projects/forgiebot.png"
        >
            Discord bot for Forgescape's Discord Server.
            The bot includes slash commands for bug reports, release announcements, suggestions, feedback and more.
        </Project>
        <Project title="6PM"
            url="https://github.com/DetKewlDog/6PM"
            img="images/projects/6pm.png"
        >
            A Discord bot made to give 6AM a taste of his own medicine.
            The bot just randomly says random stuff, reacts on messages and does some other dumb things.
        </Project>
        <Project title="MEE6am"
            url="https://github.com/DetKewlDog/MEE6AM"
            img="images/projects/mee6am.png"
        >
            A Discord bot that handles message XP and user levels like MEE6 does (but I made it).
            Currently discontinued. There was a code rewrite in the works but I was (and still am) too lazy to finish it.
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
            Experimental C++ project. Trying to implement rendering using the C++ console.
            Drawing pixels/images works, but it is pretty slow. Might use WinAPI to create a custom window in the future.
        </Project>
        <Project title="English to Standard Galactic ABC"
            url="https://gist.github.com/DetKewlDog/4e8f3366e58739735cdb9c0e6c4e049c"
            img="images/projects/galactic-abc.png"
        >
            Short program written in Python to convert text written using the Latin Alphabet to Standard Galactic Alphabet.
            Uses unicode characters as the letters.
        </Project>
        <Project title="Color Palette Swapper"
            url="https://gist.github.com/DetKewlDog/91ad74431f93c671e5600da403f271af"
            img="images/projects/color-palette-swapper.png"
        >
            Program that searches a color palette on the internet, and swaps the palette of a given image
            with the new palette based on color similarity. Can be used to convert images to different color palettes.
        </Project>
        <Project title="Route Reverse Engineer"
            url="https://gist.github.com/DetKewlDog/dddda4c4efd96dbbe2ced7df27c51350"
            img="images/projects/route-reverse-engineer.png"
        >
            Given the coordinates of a destination and the walking distance of a route taken to that destination,
            this code finds all possible starting points that would result in routes with that distance.
        </Project>
        <Project title="Nokia Cellphone FC Font Generator"
            url="https://gist.github.com/DetKewlDog/0ffb3adaeccec0643a66d6c2e71073e1"
            img="images/projects/nokia-fc-font-generator.png"
        >
            Python program to convert text to the Nokia Cellphone FC font (in image form).
        </Project>
    </div>
}

export default Projects;