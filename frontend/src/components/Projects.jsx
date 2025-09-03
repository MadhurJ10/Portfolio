import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>


      </div>
    </div>
  )
}

export default Projects
