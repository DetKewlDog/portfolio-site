import { useState, useEffect } from "react";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(1);

    const toggle = () => setPlaying(!playing);
    const updateTime = (time) => {
        if (time > duration || time < 0) return;
        audio.currentTime = time;
        setTime(time);
    };

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener('canplaythrough', () => setDuration(audio.duration));
        audio.addEventListener('timeupdate', () => setTime(audio.currentTime));
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle, duration, time, updateTime];
};

export default function Track({ title, url }) {
    const [playing, toggle, duration, time, setTime] = useAudio(url);
    const [style, setStyle] = useState('');

    useEffect(() => {
        setStyle(`linear-gradient(to right, var(--col-text-o1) ${time / duration * 100}%, var(--col-text-w2) ${time / duration * 100}%)`);
    }, [time]);

    return (
        <a className="descbox project" target="_blank">
            <header>
                <h1>{title}</h1>
                <div className='track'>
                    <button onClick={toggle} className={`fas fa-${playing ? 'pause' : 'play'}`}></button>
                    <div>
                        <input type="range"
                            min='0'
                            value={time}
                            max={Math.floor(duration)}
                            onChange={e => setTime(e.target.value)}
                            style={{ background: style }}
                        />
                        <span>{`${time      / 60 | 0}`.padStart(2, '0')  }:{`${time     % 60 | 0}`.padStart(2, '0')}</span>
                        <span>{`${duration  / 60 | 0}`.padStart(2, '0')  }:{`${duration % 60 | 0}`.padStart(2, '0')}</span>
                    </div>
                </div>
            </header>
        </a>
    );
}