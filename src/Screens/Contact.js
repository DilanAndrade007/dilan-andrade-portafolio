import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contact</h2>
      <form method="POST" className={styles.form} action="https://getform.io/f/qbloygya">
        <label htmlFor="Name">Name</label>
        <input id='Name' name='Name' className={styles.input}></input>
        <label htmlFor="Email">Email</label>
        <input id='Email' type='Email' className={styles.input}></input>
        <label>Message</label>
        <textarea className={styles.textArea}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
