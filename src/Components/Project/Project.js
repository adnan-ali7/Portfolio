import React from 'react'
import ProjectCard from './ProjectCard';

function Project() {
  return (
    <section id="Projects">
      <div className='p-10 md:p-24 text-white'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8'>
          Projects
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ProjectCard 
            title="City-Guide Website" 
            main="This is a city guide website built with HTML5, CSS3, and JavaScript."
            link=" https://adnan-ali7.github.io/City-Guide/"
          />
          <ProjectCard 
            title="Portfolio Website" 
            main="A personal portfolio site created using React JS and Tailwind CSS."
          />
          <ProjectCard 
            title="Coming Soon" 
            main="Coming Soon"
          />
        </div>
      </div>
    </section>
  )
}

export default Project;
