import React from 'react'
import styles from './Button.module.css'

export default function Button({text, link, icon, children}) {
  return (
    
    <a className={styles.a} href={link} target='_blank'>
      <button className={styles.button}>
        {children}
        <span className={styles.textButton}>{text}</span>  
      </button>
    </a>
  )
}
