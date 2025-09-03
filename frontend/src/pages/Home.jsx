import React from 'react'
import Name from '../components/Name'
import About from '../components/About'
import TeckStack from '../components/TeckStack'
import Education from '../components/Education'

const Home = () => {
  return (
    <div>
        <Name/>
        <About/>
            <TeckStack/>
          <Education/>
    </div>
  )
}

export default Home
