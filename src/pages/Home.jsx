import { useState, useEffect } from 'react';
import Descbox from '../components/Descbox';
import GithubAccess from '../services/GithubAccess.jsx';
import '../index.css';

function Home() {
    // const [aboutMe, setAboutMe] = useState('');

    // useEffect(() => {
    //     async function fetchData() {
    //         await GithubAccess.fetchAboutMe()
    //             .then(result => setAboutMe(result));
    //     }
    //     fetchData();
    // }, []);

    return <>
        <div className='title unselectable'>
            <h1>Bar Goldenstein</h1>
            <h2>Game developer + programmer</h2>
        </div>

        {/* <Descbox>{aboutMe}</Descbox> */}
        <Descbox>
            <div id="header" align="center">
                <h1>
                    Hey there, I'm DetKewlDog! 👋
                </h1>
                <div id="badges">
                    <a href="https://discord.gg/F7VQ2hwfyw">
                        <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Badge" />
                    </a>
                    <a href="https://youtube.com/@autumnfire_dev">
                        <img src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube Badge" />
                    </a>
                    <a href="https://www.reddit.com/u/DetKewlDog">
                        <img src="https://img.shields.io/badge/Reddit-%23FF4500.svg?style=for-the-badge&logo=reddit&logoColor=white" alt="Reddit Badge" />
                    </a>
                    <a href="https://steamcommunity.com/id/DetKewlDog">
                        <img src="https://img.shields.io/badge/steam-%23000000.svg?style=for-the-badge&logo=steam&logoColor=white" alt="Steam Badge" />
                    </a>
                </div>
                <br />
                <a href="https://discord.gg/F7VQ2hwfyw">
                    <img src="https://discordapp.com/api/guilds/877148912262197258/widget.png?style=banner2" alt="Join my Discord Server" />
                </a>

                <br />
                <br />
                <br />

                <p>I'm a 17-year-old game developer, programmer and beginner guitarist! 💻🎸</p>

                <p>I'm a passionate C#, C++, Python, and JavaScript programmer.</p>
                <p>I'm currently focused on learning JavaScript frameworks and game development using Unity.</p>
                <p>I'm actively working on a 2D Top-Down Adventure game called Forgescape!<br />Check out the game's progress on <a href="https://youtube.com/@autumnfire_dev">my YouTube channel!</a><br /></p>

                <h2 id="my-skills">💼 My Skills 💼</h2>
                <p>
                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=cs,unity,py,flask,cpp,c,react,nodejs,js,html,css" alt="Skills" />
                    </a>
                </p>

                <h2 id="tools-and-services">🛠️ My Go-To Tools and Services 🛠️</h2>
                <p>
                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=vscode,visualstudio,replit,netlify,supabase" alt="Tools and Services" />
                    </a>
                </p>

                <h2 id="learning-goals">🚀 Things I'd Like to Learn 🚀</h2>
                <p>
                    <a href="https://skillicons.dev">
                        <img src="https://skillicons.dev/icons?i=svelte,nextjs,linux,raspberrypi,ts,vim,vite,rust,lua" alt="Learning Goals" />
                    </a>
                </p>

                <h2 id="my-stats">🔥 My Stats 🔥</h2>

                <img src="https://github-readme-stats-detkewldog.vercel.app/api/top-langs/?username=detkewldog&layout=donut&theme=nord&count_private=true&langs_count=10" alt="Top Lang" />
            </div>
        </Descbox>
        <br />
    </>
}

export default Home;