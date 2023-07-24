import Descbox from '../components/Descbox';
import Track from "../components/Track";

export default function Music() {
    return (
        <section id='music'>
            <section>
                <div className='list-container'>
                    <Track title="Forgescape - Night" url="https://cdn.discordapp.com/attachments/912581812931416134/1132915973943468124/forgescape_night.mp3" />
                    <Track title="Forgescape - Rain" url="https://cdn.discordapp.com/attachments/912581812931416134/1132915988808089650/forgescape_rain.mp3" />
                    <Track title="Untitled Track" url="https://cdn.discordapp.com/attachments/912581812931416134/1132916008449998889/untitled_track.mp3" />
                    <Track title="No! My Substance - Boss Fight" url="https://cdn.discordapp.com/attachments/912581812931416134/1132916051378716683/nms_boss.mp3" />
                </div>
            </section>
            <section>
                <Descbox>
                    <div align="center">
                        <br />
                        Besides programming and developing games, I also play the guitar and compose music!<br />
                        <br />
                        I learned how to play the guitar when I was 10, and I now use TuxGuitar to compose music for my games.<br />
                        <br />
                        Have a listen!
                        {/* I have a Sonamaster S1 Washburn electric guitar, a Marshall MG10G AMP and an OC9 Oscar Schmidt acoustic guitar.<br /> */}
                        <br />
                        <br />
                    </div>
                </Descbox>
            </section>
        </section>
    );
}