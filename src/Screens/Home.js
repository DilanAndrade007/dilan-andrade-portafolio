import React from 'react'
import styles from './Home.module.css'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-scroll'

/* <div className={styles.ctaContainer}>
<Link to="Contact" smooth duration={500} className={styles.callToAction}>
  Get in touch </Link>
<Link to="Contact" smooth duration={500} className={styles.callToAction}>
  Get a quote </Link>
</div> */

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={ styles.titleContainer }>
        <p>
          DILAN ANDRADE <br />
          <b>Welcome to my blog!</b>
        </p>
        <p>
        </p>
      </div>

    </div>
  )
}

export default Home
