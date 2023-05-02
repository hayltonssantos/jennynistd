import React, { useEffect, useState } from 'react'
import styles from './Text.module.css'
import useCountdown from '../Counter/Counter'
import PreCard from '../PreCard/PreCard'
import Display from '../Display/Display'

export default function Text() {
  const [day, hour, minute, second] = useCountdown('2023-06-1')

  return (
    <div className={styles.wrap}>

      <PreCard numberPhoto={1}>
        <Display style='text' text={day}/>
        <Display style='nameBox' text='Days'/>
      </PreCard>
      <PreCard numberPhoto={2}>
        <Display style='text' text={hour}/>
        <Display style='nameBox' text='Hours'/>
      </PreCard>
      <PreCard numberPhoto={3}>
        <Display style='text' text={minute}/>
        <Display style='nameBox' text='Minutes'/>
      </PreCard>
      <PreCard numberPhoto={4}>
        <Display style='text' text={second}/>
        <Display style='nameBox' text='Seconds'/>
      </PreCard>

      {/* <div className={styles.preCard}
        style={isHover ? {
          background: `url(${photo2}) no-repeat  center`,
          backgroundSize: 'cover',
          transition: '2s'
      } : {}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={styles.text}>{hour}</span>
        <span className={styles.nameBox}>Hour</span>
      </div>

      <div className={styles.preCard}
        style={isHover ? {
          background: `url(${photo3}) no-repeat  center`,
          backgroundSize: 'cover',
          transition: '2s'
      } : {}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={styles.text}>{minute}</span>
        <span className={styles.nameBox}>Minute</span>
      </div>

      <div className={styles.preCard}
        style={isHover ? {
          background: `url(${photo4}) no-repeat  center`,
          backgroundSize: 'cover',
          transition: '2s'
      } : {}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={styles.text}>{second}</span>
        <span className={styles.nameBox}>Seconds</span>
      </div> */}
  </div>
  )
}
