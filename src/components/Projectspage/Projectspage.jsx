import React, {useState} from "react";
import { motion } from 'framer-motion'
import projectData from './ProjectsData.js'
import './Projectspage.css'
import background from '../images/projectsImages/projectBackground.jpeg'
import ProjectComponent from "./projectComponent/ProjectComponent";
import arrorwLeft from '../images/projectsImages/arrowLeft.png'
import arrorwRight from '../images/projectsImages/arrowRight.png'


function Projectspage() {

    const [data, setData] = useState(projectData)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(1)

    const newArray = data.map(item => {
        return <ProjectComponent 
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.text}
                image={item.image}
                github={item.github}
                demo={item.demo}
                htmlImage={item.html}
                css={item.css}
                js={item.js}
                react={item.react}
                currentPage={currentPage}/>
    })

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

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = newArray.slice(firstPostIndex, lastPostIndex)

    return(
        <motion.div className="project-page"
            initial={{height: '0%', transition: {duration: 1} }}
            animate={{height:'100%', transition: {duration: 1, delay: 1.5}}}
            exit={{height: '0%',transition: {duration: 1} }}>
            
            <div className="project-header-box">
                <motion.h1 
                    initial={{opacity: 0, transition: {duration: 1}, translateY: "-20px" }}
                    animate={{opacity: 1, transition: {duration: 1, delay: 2.2}, translateY: "0px" }}
                    exit={{opacity: 0}}
                    className="project-header">
            Projects</motion.h1></div>

            <motion.div 
            initial={{opacity: 0, transition: {duration: 1}, translateY: "-20px" }}
            animate={{opacity: 1, transition: {duration: 1, delay: 2.5}, translateY: "0px" }}
            exit={{opacity: 0}}
            className="project-container">
                <div className="project-box">
                    <img draggable='false' className="project-background" src={background}/>
                    <div className="project-details">
                        
                        <div className="project-back">
                        {currentPage > 1 && (<img onClick={previousPage} src={arrorwLeft} />)} 
                         
                        </div>
                            {currentPost}
                        <div className="project-next">
                        {currentPage < data.length && (<img onClick={nextPage} src={arrorwRight} />)}
                        
                       
                        
                        </div>
                        
                    </div>
                    
                </div>
                <div className="rwd"> 
                        {currentPage > 1 && (<img onClick={previousPage} src={arrorwLeft} />)} 
                        {currentPage < data.length && (<img onClick={nextPage} src={arrorwRight} />)}
                        
                        </div>
            </motion.div>
            
            
            </motion.div>
    )
}

export default Projectspage