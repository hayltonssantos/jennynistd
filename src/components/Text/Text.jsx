import React, { useEffect, useState } from 'react'
import styles from './Text.module.css'
import useCountdown from '../Counter/Counter'
import PreCard from '../PreCard/PreCard'
import Display from '../Display/Display'
import Button from '../Button/Button'
import { GiConfirmed } from "react-icons/gi";

export default function Text() {
  const [day, hour, minute, second] = useCountdown('2023-06-1')
  const link = "https://api.whatsapp.com/send/?phone=5521976618713&text=Ol%C3%A1%2C+confirmo+minha+presen%C3%A7a+na+Festa+da+Jennyni.+Dia+02+de+Junho%2C+%C3%A0s+20h.+Nome+Completo%3A&type=phone_number&app_absent=0"


  return (
  <>
    <div className={styles.wrap}>
      <Display text='Save The Date' style='titulo'/>
      <Display text='Jennyni - 15 anos' style='name'/>

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

      <Display text="02 | Junho | 20H" style='date'></Display>
      <Display text="Prepare-se para um grande dia!
                    Venha comemorar comigo!" 
                    style='textDate'>              
      </Display>
      <Button link={link} text='Confirmar Presença'>
          <GiConfirmed style={{color: 'white', fontSize: '50px'}}/>
      </Button>
  </div>
  

  </>
  )
}
