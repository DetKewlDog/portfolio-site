import { useState, useEffect } from 'react';
import Descbox from '../components/Descbox';
import GithubAccess from '../services/GithubAccess.jsx';
import '../index.css';

function Home() {
    const [aboutMe, setAboutMe] = useState('');

    useEffect(() => {
        async function fetchData() {
            await GithubAccess.fetchAboutMe()
                .then(result => setAboutMe(result));
        }
        fetchData();
    }, []);

    return <>
        <div className='title unselectable'>
            <h1>Bar Goldenstein</h1>
            <h2>Game developer + programmer</h2>
        </div>

        <Descbox>{aboutMe}</Descbox>
        <br />
    </>
}

export default Home;