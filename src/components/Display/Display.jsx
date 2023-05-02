import React, { useState } from 'react'
import styles from './Display.module.css'
import './Display.css'

export default function Display({style, text}) {
  
  const [isHover, setIsHover] = useState();

  const handleMouseEnter = () =>{ setIsHover(true) }
  const handleMouseLeave = () =>{ setIsHover(false) }
  
  return (
    <span className={style}>
          {text}
    </span>
  )
}
