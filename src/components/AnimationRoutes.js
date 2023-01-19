import React from "react";
import Homepage from '../components/Homepage/Homepage';
import Aboutpage from '../components/Aboutpage/Aboutpage';
import Projectspage from "./Projectspage/Projectspage";
import Contactpage from "./Contactpage/Contactpage";
import {  Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion'

function AnimationRoutes() {

    const location = useLocation();
    return(
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Homepage />} />
                <Route path='about' element={<Aboutpage />} />
                <Route path='projects' element={<Projectspage />} />
                <Route path='contact' element={<Contactpage />} />
        
            </Routes>

        </AnimatePresence>
    
    ) 
}

export default AnimationRoutes