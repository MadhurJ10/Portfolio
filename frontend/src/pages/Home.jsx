import React from 'react'
import Name from '../components/Name'
import About from '../components/About'
import TeckStack from '../components/TeckStack'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Name/>
        <About/>
            <TeckStack/>
          <Education/>
          <Projects/>
          <Footer/>
    </div>
  )
}

export default Home
