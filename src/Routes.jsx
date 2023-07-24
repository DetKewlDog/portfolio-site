import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Music from './pages/Music';

export const routes = [
    { path: '/',            element: (<Home />      ), text: 'DetKewlDog'   },
    { path: '/projects',    element: (<Projects />  ), text: 'Projects'     },
    { path: '/music',       element: (<Music />     ), text: 'Music'        },
];

export const Router = (includeDefault = true) => {
    const router = (routes.map((route, index) => (
        <Route key={index} {...route} />
    )));
    if (includeDefault) {
        router.push(<Route key={router.length} path='*' element={<Home />} />);
    }
    return (<Routes>{router}</Routes>);
};