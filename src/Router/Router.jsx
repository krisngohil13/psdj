import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import ProjectDetail from '../pages/Projects/ProjectDetail';
import Expertise from '../pages/Expertise/Expertise';
import Contact from '../pages/Contact/Contact';
import Team from '../pages/Team/Team';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            {/* Add other routes here */}
        </Routes>
    )
}

export default Router;