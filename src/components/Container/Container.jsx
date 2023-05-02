import React from 'react'
import Text from '../Text/Text'
import styles from './Container.module.css'
import Display from '../Display/Display'
import Button from '../Button/Button'

export default function Container() {
  return (
    <div className={styles.container}>
        <Text/>
        <Display text='Save The Date' style='titulo'/>
        <div className={styles.buttonDiv}>
          <Button></Button>
        </div>
    </div>
  )
}
