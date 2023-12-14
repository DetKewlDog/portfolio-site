import Descbox from '../components/Descbox';
import AboutMe from '../components/AboutMe';
import Project from '../components/Project';
import IconsList from '../components/IconsList';

export default function Home() {
    let age = new Date(new Date() - new Date("2005-11-18")).getYear() - 70;
    let exp = new Date(new Date() - new Date("2020-04-01")).getYear() - 70;

    return (
        <>
            <header>
                <div className='title unselectable'>
                    <h1>Bar Goldenstein</h1>
                    <h2>Game developer + programmer</h2>
                </div>
            </header>

            <br /><br />
            <br /><br />
            <br /><br />

            <AboutMe dir='fromleft'>
                <Descbox>
                    <h1>Hey there, I'm Bar! 👋</h1>
                    I'm {age == 18 ? 'an' : 'a'} {age}-year-old game developer, programmer and beginner guitarist from Israel! 💻🎸
                    <br /><br />
                    I'm a passionate C#, C++, Python, and JavaScript programmer.
                    <br /><br />
                    I'm currently focused on learning JavaScript frameworks and game development using Unity.
                    <br /><br />
                    I work at <a href="https://www.rafael.co.il/" target="_blank">Rafael Advanced Defense Systems</a> as a part-time job.
                </Descbox>
                <img className='profile-picture' src='/DoggoPFPcircle.png' alt='pfp'></img>
            </AboutMe>

            <br /><br />

            <AboutMe dir='fromright'>
                <div id='featured'>
                    <div className="grid-container">
                        <Project title="Forgescape"
                            url="https://www.youtube.com/playlist?list=PLhFxqiJA0WlWNxFYUh4fKYkagRRgUSL_f"
                            img="/forgescape.png"
                            tags={['C#', 'Unity', 'Primary Project']}
                        >
                            2D TopDown Adventure game where you are able to fight monsters,
                            obtain powerful items and explore biomes in a procedurally generated world.
                        </Project>
                        <Project title="Harvest Hero"
                            url="https://detkewldog.itch.io/harvest-hero"
                            img="/harvest-hero.png"
                            tags={['C#', 'Unity', 'Game Jam']}
                        >
                            A game where players maintain an ever-shrinking farm.
                            Was created as part of the Ludum Dare 54 game jam.
                        </Project>
                        <Project title="Red Alert Map"
                            url="https://red-alert-map.netlify.app/"
                            img="/red-alert-map.png"
                            tags={['Website', 'JS', 'React']}
                        >
                            React application that displays real-time rocket alerts in Israel on a map.
                            The app utilizes real-time alert data provided by Pikud HaOref.
                        </Project>
                        <Descbox>
                            <h1>My Featured Projects</h1>
                            I develop projects in my free time to<br />
                            practice my skills and as a personal hobby.
                            <br /><br />
                            Here is a snippet of my latest<br />
                            personal projects!
                            <br /><br />
                            Feel free to check out their respective<br />
                            repositories if you wish to take a more<br />
                            in-depth look into them.
                            <br /><br />
                            A complete list of projects I've<br />
                            developed can be found <a rel='nofollow' href='/projects' onClick={e => {
                                e.preventDefault();
                                document.querySelector('a[name="Projects"]').click();
                            }}>here</a>.
                            <br /><br />
                        </Descbox>
                    </div>
                </div>
            </AboutMe>

            <AboutMe dir='frombottom'>
                <Descbox>
                    <h1 style={{fontSize: '40px'}}>My Skillset</h1>
                    <div id='skillset'>
                        <div className="grid-container">
                            <Descbox>
                                <h1>+{exp}</h1>
                                Years of Programming Experience
                            </Descbox>
                            <Descbox>
                                <h1 className='fas fa-book-open'></h1><br />
                                Independent Learner and Hobbyist
                            </Descbox>
                            <Descbox>
                                <h1 className='fas fa-thumbs-up'></h1><br />
                                Problem Solving Skills
                            </Descbox>
                            <Descbox>
                                <h1 className='fas fa-bug'></h1><br />
                                High-Level Debugging Skills
                            </Descbox>
                            <Descbox>
                                <h1 className='fas fa-award'></h1><br />
                                Aspiration to Perfectionism
                            </Descbox>
                        </div>
                    </div>
                    <div id='toolset'>
                        <div>
                            <h1>My Toolset</h1>
                            <IconsList
                                list={['cs', 'unity', 'py', 'flask', 'cpp', 'c', 'react', 'nodejs', 'js', 'html', 'css', 'vite', 'linux', 'supabase', 'bash', 'nextjs', 'ts', 'tailwind', 'prisma']}
                            />
                            <h1>Things I'd Like to Learn</h1>
                            <IconsList
                                list={['svelte', 'raspberrypi', 'vim', 'lua', 'godot', 'tauri', 'electron']}
                            />
                        </div>
                        <div>
                            <br />
                            <img src={`https://github-readme-stats-detkewldog.vercel.app/api/top-langs/?username=detkewldog&layout=donut&theme=nord&count_private=true&langs_count=10?${new Date().getTime()}`}
                                alt="My Stats" loading="lazy" style={{width: '350px', height: '375px'}}></img>
                        </div>
                    </div>
                </Descbox>
            </AboutMe>
            <br />
        </>
    );
}