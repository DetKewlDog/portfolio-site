import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';

import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById("root")).render(
    <div className="overlay">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </BrowserRouter>
    </div>
);