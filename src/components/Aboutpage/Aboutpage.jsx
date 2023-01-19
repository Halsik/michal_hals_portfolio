import React from "react";
import './Aboutpage.css'
import { motion } from 'framer-motion'

import aboutBackground from '../images/about-background.jpeg'
import html from '../images/aboutImages/html.png'
import css from '../images/aboutImages/css.png'
import js from '../images/aboutImages/js.png'
import react from '../images/aboutImages/react.png'
import firebase from '../images/aboutImages/firebase.png'
import github from '../images/aboutImages/github.png'

function Aboutpage() {
    return(
        <motion.div className="about-page"
        initial={{height: '0%', transition: {duration: 1} }}
        animate={{height:'100%', transition: {duration: 1, delay: 1.5}}}
        exit={{height: '0%',transition: {duration: 1} }}
        
        >   <div className="about-header-box">
                <motion.h1 
                initial={{opacity: 0, transition: {duration: 1}, translateY: "-20px" }}
                animate={{opacity: 1, transition: {duration: 1, delay: 2.2}, translateY: "0px" }}
                exit={{opacity: 0}}
                className="about-header">
                    About me</motion.h1>
        </div>
            <div className="about-container">
                <motion.div 
                initial={{opacity: 0, transition: {duration: 1}, translateY: "-30px" }}
                animate={{opacity: 1, transition: {duration: 1, delay: 2.2}, translateY: "0px" }}
                exit={{opacity: 0 }}
                className="about-text">
                <img draggable="false" className="about-background" src={aboutBackground}/>
                <div className="about-story">
                    <div className="about-story-header">
                        <motion.h1
                        initial={{opacity: 0, translateY: "-30px" }}
                        animate={{opacity: 1, transition: {duration: 1, delay: 3}, translateY: "0px" }}
                        exit={{opacity: 0 }}
                        >My Story</motion.h1>
                    </div>
                    <div className="about-story-info">
                        <motion.p
                        initial={{opacity: 0, translateY: "-30px" }}
                        animate={{opacity: 1, transition: {duration: 1, delay: 3}, translateY: "0px" }}
                        exit={{opacity: 0 }}>My name is Michał Hals. I'm 23 years old and I'm currently student of Computer Science on WSB in Gdańsk. For over a year now I'm learning coding. In 2021 I attended Frontend Bootcamp in InfoShareAcademy, it was 3-months long course where I learn a lot about frontend technologies. Now I am looking for my first job in IT an area where I can test my knowledge in practice. I am a communicative, conscientious person who is looking for continuous development opportunities.</motion.p>
                    </div>
                </div>
                <div className="about-stack">
                    <div className="about-stack-header">
                    <motion.h1
                    initial={{opacity: 0, translateY: "-30px" }}
                    animate={{opacity: 1, transition: {duration: 1, delay: 3}, translateY: "0px" }}
                    exit={{opacity: 0 }}>My Tech Stack</motion.h1>
                    </div>
                    <div className="about-stack-info">
                        <motion.div 
                        initial={{opacity: 0, transition: {duration: 1}, translateX: "-30px" }}
                        animate={{opacity: 1, transition: {duration: 1, delay: 3.3}, translateX: "0px" }}
                        exit={{opacity: 0,transition: {duration: 0.5}, translateX: "0px"  }}
                        className="stack-details">
                            <img src={html} />
                            <p>HTML</p>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, transition: {duration: 1}, translateX: "-30px" }}
                        animate={{opacity: 1, transition: {duration: 1, delay: 4.2}, translateX: "0px" }}
                        exit={{opacity: 0,transition: {duration: 0.5}, translateX: "0px"  }}
                        className="stack-details">
                            <img src={css}/>
                            <p>CSS</p>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, transition: {duration: 1}, translateX: "-30px" }}
                        animate={{opacity: 1, transition: {duration: 1, delay: 5.1}, translateX: "0px" }}
                        exit={{opacity: 0,transition: {duration: 0.5}, translateX: "0px"  }}
                        className="stack-details">
                            <img src={js}/>
                            <p>JavaScript ES6</p>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, transition: {duration: 1}, translateX: "-30px" }}
                        animate={{opacity: 1, transition: {duration: 1, delay: 6}, translateX: "0px" }}
                        exit={{opacity: 0,transition: {duration: 0.5}, translateX: "0px"  }}
                        className="stack-details">
                            <img src={react}/>
                            <p>React</p>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, transition: {duration: 1}, translateX: "-30px" }}
                        animate={{opacity: 1, transition: {duration: 1, delay: 6.9}, translateX: "0px" }}
                        exit={{opacity: 0,transition: {duration: 0.5}, translateX: "0px"  }}
                        className="stack-details">
                            <img src={firebase}/>
                            <p>Firebase</p>
                        </motion.div>
                        <motion.div 
                        initial={{opacity: 0, transition: {duration: 1}, translateX: "-30px" }}
                        animate={{opacity: 1, transition: {duration: 1, delay: 7.8}, translateX: "0px" }}
                        exit={{opacity: 0,transition: {duration: 0.5}, translateX: "0px"  }}
                        className="stack-details">
                            <img src={github}/>
                            <p>Github</p>
                        </motion.div>
                    </div>
                </div>
                </motion.div>
                
            </div>
        </motion.div>
    )
}

export default Aboutpage