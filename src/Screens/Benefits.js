import React from 'react'
import styles from './Benefits.module.css'
import { BsFillDoorOpenFill } from 'react-icons/bs'

const Benefits = () => {
  return (
    <div name="Benefit" className={styles.benefits}>
      <h2 className={styles.benefitTitle}>
      <p>
        Benefits
      </p>
      </h2>

      <p>
        you <BsFillDoorOpenFill />
      </p>
    </div>
  )
}

export default Benefits
