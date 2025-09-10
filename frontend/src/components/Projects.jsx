import ProjectCard from './ProjectCard';
import { useContext } from 'react';
import { TechStackContext } from '../context/TechStackProvider';

const Projects = () => {
  const { projects } = useContext(TechStackContext);

  return (
    <div className="flex flex-col gap-6 mt-[2rem]">
      <h1 className='text-2xl'>my project</h1>
      <div className='flex flex-wrap gap-6'>
              {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
      </div>
    </div>
  );
};

export default Projects;
