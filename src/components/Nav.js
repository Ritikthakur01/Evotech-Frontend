import React from 'react'
import style from "../style/nav.module.css"
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={style.nav_mainContainer}>
        <ul>
            <li className= {style.nav_logo}>
                <NavLink to="/">Survey</NavLink>
            </li>
        </ul>
        <ul>
            <li className= {style.nav_Items}>
                <NavLink to="/">Survey Form</NavLink>
            </li>
            <li className= {style.nav_Items}>
                <NavLink to="/survey-details">Survey Details</NavLink>      
            </li>
        </ul>
    </div>
  )
}

export default Nav