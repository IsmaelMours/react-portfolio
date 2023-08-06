import "./WorkCardStyles.css"
import React from 'react'
import pro1 from "../assets/project1.jpg"
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>

        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt=""/>
                <h2 className="project-title"> Calculator</h2>
                <div className="pro-details">
                    <p>The calculator web project is an innovative and user-friendly tool 
                    that provides an interactive and versatile experience.</p>
                    <div className="pro-btns">
                        <NavLink to ="" className="btn">View</NavLink>
                        <NavLink to ="" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pro1} alt=""/>
                <h2 className="project-title"> Calculator</h2>
                <div className="pro-details">
                    <p>The calculator web project is an innovative and user-friendly tool 
                    that provides an interactive and versatile experience.</p>
                    <div className="pro-btns">
                        <NavLink to ="" className="btn">View</NavLink>
                        <NavLink to ="" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pro1} alt=""/>
                <h2 className="project-title"> Calculator</h2>
                <div className="pro-details">
                    <p>The calculator web project is an innovative and user-friendly tool 
                    that provides an interactive and versatile experience.</p>
                    <div className="pro-btns">
                        <NavLink to ="" className="btn">View</NavLink>
                        <NavLink to ="" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default WorkCard