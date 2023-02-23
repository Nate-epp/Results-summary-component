import React from 'react'
import styles from './Results.module.css'


function Results() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <p className ={styles.header}>Your Result</p>
        <div className={styles.circle}>
          <h2 className={styles.scored}>76</h2>
          <p> of 100</p>
        </div>
        <h4 className={styles.text}>Great</h4>
        <p className={styles.description}>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className={styles.rightPanel}>
        <p>Summary</p>
        <div className={styles.contentPanel}>
           <div className={styles.reaction}>
             <img src="./src/assets/images/icon-reaction.svg" />
              <p className={styles.content}>Reaction</p>
              <p className={styles.number}><span>80 </span> / 100</p>
            </div>
            <div className={styles.memory}>
             <img src="./src/assets/images/icon-memory.svg" />
              <p className={styles.content}>Memory</p>
              <p className={styles.number}><span>92 </span> / 100</p>
            </div>
            <div className={styles.verbal}>
             <img src="./src/assets/images/icon-verbal.svg" />
              <p className={styles.content}>Verbal</p>
              <p className={styles.number}><span>61 </span> / 100</p>
            </div>
            <div className={styles.visual}>
             <img src="./src/assets/images/icon-memory.svg" />
              <p className={styles.content}>Visual</p>
              <p className={styles.number}><span>72 </span> / 100</p>
            </div>
            <button type='button' className={styles.button}>Continue</button>
          </div>
      </div>
    </div>
  )
}

export default Results