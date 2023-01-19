import React from "react";  
import './Contactpage.css'
import {motion} from 'framer-motion'
import aboutBackground from '../images/about-background.jpeg'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'


function Contactpage() {
    return(
        <motion.div 
        initial={{height: '0%', transition: {duration: 1} }}
        animate={{height:'100%', transition: {duration: 1, delay: 1.5}}}
        exit={{height: '0%',transition: {duration: 1} }}
        className="contact-page">
            <div className="contact-header-box">
                <motion.h1 
                initial={{opacity: 0, transition: {duration: 1}, translateY: "-20px" }}
                animate={{opacity: 1, transition: {duration: 1, delay: 2.2}, translateY: "0px" }}
                exit={{opacity: 0}}
                className="contact-header">
                    Contact</motion.h1>
        </div>
        <div className="contact-container-box">
                <motion.div 
                initial={{opacity: 0, transition: {duration: 1}, translateY: "-30px" }}
                animate={{opacity: 1, transition: {duration: 1, delay: 2.2}, translateY: "0px" }}
                exit={{opacity: 0 }}
                className="contact-text">
                <img draggable="false" className="about-background" src={aboutBackground}/>
                <div className="contact-container">
                    <motion.div 
                    initial={{opacity: 0, transition: {duration: 0.7}, translateY: "-30px" }}
                    animate={{opacity: 1, transition: {duration: 0.7, delay: 3}, translateY: "0px" }}
                    exit={{opacity: 0 }}
                    className="contact-box">
                        <h1>Mail</h1>
                        <p>michal.jan.hals@gmail.com</p>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0, transition: {duration: 0.7}, translateY: "-30px" }}
                    animate={{opacity: 1, transition: {duration: 0.7, delay: 3.9}, translateY: "0px" }}
                    exit={{opacity: 0 }}
                    className="contact-box">
                        <h1>Phone</h1>
                        <p>+48 518920112</p>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0, transition: {duration: 0.7}, translateY: "-30px" }}
                    animate={{opacity: 1, transition: {duration: 0.7, delay: 4.8}, translateY: "0px" }}
                    exit={{opacity: 0 }}
                    className="contact-box">
                        <h1>Location</h1>
                        <p>Kwidzyn, Poland</p>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0, transition: {duration: 1} }}
                    animate={{opacity: 1, transition: {duration: 1, delay:5} }}
                    exit={{opacity: 0 }}
                    className="contact-icons">
                        <a target='blank' href="https://github.com/Halsik">
                        <div className="icon-box">
                            <img src={github}/>
                        </div>
                        </a>
                        <a href="https://www.linkedin.com/in/micha%C5%82-hals-a35125233/">
                        <div className="icon-box">
                            <img src={linkedin}/>
                        </div>
                        </a>
                    </motion.div>
                </div>
                </motion.div>
        </div>        
        </motion.div>
    )
}

export default Contactpage