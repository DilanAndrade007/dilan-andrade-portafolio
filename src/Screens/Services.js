import React from 'react'
import styles from './Services.module.css'

const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>
        We solve
      </p>
      <img className={styles.webImage} src={require('../assets/imagen.jpg')} />
    </div>
  )
}

export default Services
