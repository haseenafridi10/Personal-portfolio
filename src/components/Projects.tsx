import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
    {
        id: 0,
        title: "Static Resume Builder",
        desc: 'A html, css and Typescript based app for managing and building your resume statically.',
        img: '/project_01.jpg',
        tags: ["Html", "CSS", "Typescript", "Node"],
    },
    {
        id: 1,
        title: "Dynamic Resume Builder",
        desc: 'A html, css and Typescript based app for managing and building your resume dynamically.',
        img: '/project_02.jpg',
        tags: ["Html", "CSS", "Typescript", "Node"],
    }
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My projects'/>
      {/* <div className="grid gap-10 grid-cols-2 place-items-center h-10"> */}

      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2  place-items-center">
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
        </div>
    </div>
    
  )
}

export default Projects
