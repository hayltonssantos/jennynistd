import React, { useState } from 'react'
import styles from './Display.module.css'
import './Display.css'

export default function Display({isHoverSet, style, text}) {
  
  return (
    <span className={style}>
          {text}
    </span>
  )
}
