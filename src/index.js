import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';

import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById("root")).render(
    <div className="overlay">
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/projects' element={<Projects />} /> */}
            </Routes>
        </BrowserRouter>
    </div>
);