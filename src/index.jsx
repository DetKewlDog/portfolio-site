import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import Projects from './pages/Projects';

import Navbar from './components/Navbar';

const routes = [
    { path: '/',            element: (<Home />      ) },
    { path: '/projects',    element: (<Projects />  ) },
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