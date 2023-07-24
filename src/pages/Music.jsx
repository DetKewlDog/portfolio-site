import Descbox from '../components/Descbox';
import Track from "../components/Track";

export default function Music() {
    return (
        <section id='music'>
            <section>
                <div className='list-container'>
                    <Track title="Forgescape - Night"
                        date="11/09/2022"
                        url="https://cdn.discordapp.com/attachments/801426473059614730/1132943519590395955/forgescape_night.ogg"
                    />
                    <Track title="Forgescape - Rain"
                        date="07/11/2022"
                        url="https://cdn.discordapp.com/attachments/801426473059614730/1132943519259037737/forgescape_rain.ogg"
                    />
                    <Track title="Untitled Track"
                        date="28/04/2023"
                        url="https://cdn.discordapp.com/attachments/801426473059614730/1132943518424379432/untitled_track.ogg"
                    />
                    <Track title="No! My Substance - Boss Fight"
                        date="18/06/2023"
                        url="https://cdn.discordapp.com/attachments/801426473059614730/1132943518881566781/nms_boss.ogg"
                    />
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