import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
      <Navbar />
    {/* <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner_bg.jpg)]  bg-cover '
    style={{backgroundSize: '25%', backgroundPosition: 'left 200px top 150px '}}
    > */}
    <div
    id="hero"
    className="min-h-screen bg-no-repeat bg-[url(/banner_bg.jpeg)]  bg-cover"               
    style={{
      backgroundSize: '25%',
      backgroundPosition: 'left 200px top 100px',
  }}
>  
      <div className="container grid lg:grid-cols-2 h-[100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-white mt-20">
            <div>
                <p data-aos="fade-up">I'm</p>
                <p data-aos="fade-up">Haseen</p>
                <p data-aos="fade-up">Afridi</p>
            </div>
          </div>
        </div>
       </div>
      
    </div>
  )
}

export default Hero;
