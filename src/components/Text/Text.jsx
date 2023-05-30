import React, { useEffect, useState } from 'react'
import styles from './Text.module.css'
import useCountdown from '../Counter/Counter'
import PreCard from '../PreCard/PreCard'
import Display from '../Display/Display'
import Button from '../Button/Button'
import { GiConfirmed, GiPresent } from "react-icons/gi";
import {FaMapPin } from "react-icons/fa";

export default function Text() {
  const [day, hour, minute, second] = useCountdown('2023-06-1')
  const link = "https://api.whatsapp.com/"
  const sug = 'https://drive.google.com/file/d/1mi5u9Q6fc5w_nuhlMWDqVDRjNHy87mhs/view?usp=sharing'
  const mapa = 'https://www.google.com.br/maps'


  const [isHover, setIsHover] = useState();

  const handleMouseEnter = () =>{ setIsHover(true) }
  const handleMouseLeave = () =>{ setIsHover(false) }

  return ( 
    
  <>
    <div className={styles.wrap}>
      <Display text='Save The Date' style='titulo'/>
      <Display text='Jennyni - 15 anos' style='name'/>

      <PreCard numberPhoto={1} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Display style={isHover ? 'text:hover' : 'text'} text={day} isHoverSet={isHover}/>
        <Display style='nameBox' text='Days' isHoverSet={isHover}/>
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

      <Display text="02 | Junho | 21H" style='date'></Display>
      <Display text="Prepare-se para um grande dia!
                    Venha comemorar comigo!" 
                    style='textDate'>              
      </Display>
      <Button link={mapa} text='Local' style='nameBox'>
          <FaMapPin style={{color: 'white', fontSize: '50px'}}/>
      </Button>
      <Button link={link} text='Confirmar Presença' style='nameBox'>
          <GiConfirmed style={{color: 'white', fontSize: '50px'}}/>
      </Button>
      <Button link={sug} text='Sugestão de presente' style='nameBox'>
          <GiPresent style={{color: 'white', fontSize: '50px'}}/>
      </Button>
  </div>
  

  </>
  )
}
