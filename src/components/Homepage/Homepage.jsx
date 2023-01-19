import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './Homepage.css'
import { motion } from 'framer-motion'


function Homepage() {

    
    
        
      
        
    return(
        <div className="app-container">
            <motion.div 
            initial={{height: '0%', transition: {duration: 1}}}
            animate={{height:'100%', transition: {duration: 1, delay: 1.5}}}
            exit={{height: '0%', transition: {duration: 1} }}
            className="homepage-container">
               
               <div className="homepage-links">
               <Link to='/about'><motion.p 
               initial={{opacity: 0, }}
               animate={{opacity:1, transition:{duration: 1.5, delay: 2.3}}}
               exit={{opacity: 0,}} 
               className="link">About me</motion.p></Link>
               <Link to='/projects'><motion.p  
               initial={{opacity: 0, }}
               animate={{opacity:1, transition:{duration: 1.5, delay: 2.3}}}
               exit={{opacity: 0,  }} 
               className="link">Projects</motion.p></Link>
               <Link to='/contact'><motion.p  
               initial={{opacity: 0, }}
               animate={{opacity:1, transition:{duration: 1.5,delay: 2.3}}}
               exit={{opacity: 0,  }} 

               className="link">Contact</motion.p></Link>
               </div>
            </motion.div>
        </div>
    )
}

export default Homepage