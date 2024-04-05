import Home from './Screens/Home'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import Services from './Screens/Services'
// eslint-disable-next-line no-unused-vars
import HowWeWork from './Screens/HowWeWork'
// eslint-disable-next-line no-unused-vars
import Benefits from './Screens/Benefits'
import Contact from './Screens/Contact'
import Navbar from './Components/Navbar'

function App () {
  return (<div className="App">
    <Navbar />
    <Home />

    <Contact />
    </div>
  )
}

export default App
