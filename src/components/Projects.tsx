import React from 'react'
import Heading from './Heading';
import Card from './Card';
import { data } from '@/data/data';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const router = useRouter();
  return (
    <div id='projects' className='container pt-30'>
      <Heading title='My projects'/>
      {/* <div className="grid gap-10 grid-cols-2 place-items-center h-10"> */}

      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 justify-items-center">
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />
          ))}
        </div>
    </div>
    
  )
}

export default Projects
