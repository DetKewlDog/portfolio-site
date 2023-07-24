import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Music from './pages/Music';

import Navbar from './components/Navbar';

const routes = [
    { path: '/',            element: (<Home />      ), text: 'Home'     },
    { path: '/projects',    element: (<Projects />  ), text: 'Projects' },
    { path: '/music',       element: (<Music />     ), text: 'Music'    },
];

createRoot(document.getElementById("root")).render(
    <div className="overlay">
        <BrowserRouter>
            <Navbar routes={routes} />
            <section id="content">
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))}
                    <Route path='*' element={<Home />} />
                </Routes>
            </section>
        </BrowserRouter>
    </div>
);