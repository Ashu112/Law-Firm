import React from 'react'
import styles from './Navbar.module.css'
import LogoImage from '../../assets/Logo.png'
const Navbar = () => {
  return (
    <div className={styles.wrapper}>
       <img src={LogoImage} alt="logo" style={{height:"40px",cursor:"pointer"}}/>
       <div className={styles.navHead}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>PracticeAreas</p>
        <p>About Us</p>
        <p></p>
       </div>
       <button className={styles.btn}>Contact Now</button>
    </div>
  )
}

export default Navbar
