import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import { routes, Router } from './Routes';
import Navbar from './components/Navbar';

createRoot(document.getElementById("root")).render(
    <div className="overlay">
        <BrowserRouter>
            <Navbar routes={routes} />
            <section id="content">
                <Router />
            </section>
        </BrowserRouter>
    </div>
);