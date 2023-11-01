import React from 'react'
import styles from './CardDisplay.module.css'
import Card from '../Card/Card'

const CardDisplay = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTxt}>Why Choose us?</div>
      <div className={styles.cardLayout}>
        <Card data="98" />
        <Card data="100"/>
        <Card data="96.5"/>
      </div>
    </div>
  )
}

export default CardDisplay
