import ProjectCard from './ProjectCard';
import { useContext } from 'react';
import { TechStackContext } from '../context/TechStackProvider';

const Projects = () => {
  const { projects } = useContext(TechStackContext);

  return (
    <div className="flex flex-wrap gap-6">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  );
};

export default Projects;
