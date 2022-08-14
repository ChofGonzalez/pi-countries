import React from 'react'
import { Link } from 'react-router-dom'
import style from './css/navbar.module.css'

export default function NavBar() {
  return (
    <div className={style.navbarcontainer}> 
    <span className={style.span}>Countries PI</span>
      <Link className={style.btnBack} to="/">Back</Link>
      <Link to="/activity" className={style.btn}>Add Activity</Link>
    </div>
  )
}