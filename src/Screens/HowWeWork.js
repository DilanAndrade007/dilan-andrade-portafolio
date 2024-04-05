import React from 'react'
import styles from './HowWeWork.module.css'
import Step from '../Components/Step'
const HowWeWork = () => {
  const steps = [
    {
      text: 'you',
      id: 1
    },
    {
      text: 'you',
      id: 2
    },
    {
      text: 'you',
      id: 3
    },
    {
      text: 'you',
      id: 4
    },
    {
      text: 'you',
      id: 5
    }
  ]
  return (
    <div name="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>How we work</h2>
    {steps.map(x => (
        // eslint-disable-next-line react/jsx-key
        <Step text={x.text} step={x.id}/>
    ))}
    </div>

  )
}

export default HowWeWork
