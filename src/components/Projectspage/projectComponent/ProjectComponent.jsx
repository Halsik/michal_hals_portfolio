import React, {useState} from "react";
import projectData from '../ProjectsData.js'
import { motion } from 'framer-motion'
import html from '../../images/aboutImages/html.png'
import css from '../../images/aboutImages/css.png'
import js from '../../images/aboutImages/js.png'
import react from '../../images/aboutImages/react.png'
import arrorwLeft from '../../images/projectsImages/arrowLeft.png'
import arrorwRight from '../../images/projectsImages/arrowRight.png'

import './ProjectComponent.css'

function ProjectComponent(props) {

    const [data, setData] = useState(projectData)
    const [currentPage, setCurrentPage] = useState(props.currentPage)


    const nextPage = () => {
        if(currentPage < data.length) {
        setCurrentPage(currentPage + 1)
        }
    }
    const previousPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
    }
    }
    return(
        <div className="project-component">
            <div className="project-images-box">
                <div className="project-images">
                    <img className="project-pic" src={props.image}/>
                </div>
                <div className="project-buttons">
               
                    <button><a target='blank' href={props.demo}>Demo Live</a></button>
                    <button><a target='blank' href={props.github}>Github</a></button>
                    
                </div>
            </div>
            <div className="project-info-box">
                <div className="project-info-header">
                    <h1>{props.title}</h1>
                </div>
                <div className="project-info-text">
                    <p>{props.text}</p>
                </div>
                <div className="project-info-stack">
                    <h1>What I Used</h1>
                </div>
                <div className="project-info-stack-box">
                    <motion.img 
                    initial={{opacity: 0, translateY: "30px" }}
                    animate={{opacity: 1, transition: {duration: 1, delay: 0.5}, translateY: "0px" }}
                    exit={{opacity: 0 }} 
                    src={props.html ? '' : html}/>
                    <motion.img 
                    initial={{opacity: 0, translateY: "30px" }}
                    animate={{opacity: 1, transition: {duration: 1, delay: 1}, translateY: "0px" }}
                    exit={{opacity: 0 }} 
                    src={props.css ? css : ''}/>
                    <motion.img 
                    initial={{opacity: 0, translateY: "30px" }}
                    animate={{opacity: 1, transition: {duration: 1, delay: 1.3}, translateY: "0px" }}
                    exit={{opacity: 0 }} 
                    src={props.js ? js : ''}/>
                    <motion.img 
                    initial={{opacity: 0, translateY: "30px" }}
                    animate={{opacity: 1, transition: {duration: 1, delay: 1.6}, translateY: "0px" }}
                    exit={{opacity: 0 }}
                    src={props.react ? react : ''}/>
                </div>
            </div>
        </div>
                  
    )
}

export default ProjectComponent