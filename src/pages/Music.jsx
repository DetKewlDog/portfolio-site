import Descbox from '../components/Descbox';
import Track from "../components/Track";

export default function Music() {
  return (
    <section id='music'>
      <div className='list-container'>
        <Track title="Forgescape - Night"
          date="11/09/2022"
          url="/forgescape_night.ogg"
        />
        <Track title="Forgescape - Rain"
          date="07/11/2022"
          url="/forgescape_rain.ogg"
        />
        <Track title="Forgescape - Mother Slime"
          date="18/06/2023"
          url="/nms_boss.ogg"
        />
        <Track title="Untitled Track"
          date="28/04/2023"
          url="/untitled_track.ogg"
        />
      </div>
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
  );
}