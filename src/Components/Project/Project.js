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
            main="Developed a responsive City Guide website for help People to Explore City Beautiful Places.
                  Technologies Used: HTML, CSS, JavaScrip"
            link="https://adnan-ali7.github.io/City-Guide/"
          />
          <ProjectCard 
            title="Portfolio Website" 
            main="Developed a responsive Portfolio website for showing my Skills and my Projects.
                  Technologies Used: React JS, Tailwind CSS"
            link="https://adnan-ali7.github.io/Portfolio/"
          />
          <ProjectCard 
            title="Restaurent App" 
            main="Developed a responsive web application for managing restaurant reservations,
                  menu display, and customer reviews.
                  Technologies Used: HTML, CSS, JavaScript"
            link=" https://adnan-ali7.github.io/Restaurent/"
          />
        </div>
      </div>
    </section>
  )
}

export default Project;
