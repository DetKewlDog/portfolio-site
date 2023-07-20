import { useState, useEffect } from 'react';
import Descbox from '../components/Descbox';
import GithubAccess from '../services/GithubAccess';

export default function Home() {
    const [aboutMe, setAboutMe] = useState('');

    useEffect(() => {
        async function fetchData() {
            await GithubAccess.fetchAboutMe()
                .then(result => setAboutMe(result));
        }
        fetchData();
    }, []);

    return (
        <section id="home">
            <header>
                <div className='title unselectable'>
                    <h1>Bar Goldenstein</h1>
                    <h2>Game developer + programmer</h2>
                </div>
           </header>

            <Descbox>{aboutMe}</Descbox>
            <br />
        </section>
    );
}