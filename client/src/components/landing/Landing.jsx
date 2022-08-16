import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './landing.module.css'


export default function LandingPage() {    
useEffect(() => {
        document.title = "Countries PI"})


  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome</h1>
      <br />
      <Link className={style.btn} to='/home'>Let's explore!</Link>

    </div>
  )
}