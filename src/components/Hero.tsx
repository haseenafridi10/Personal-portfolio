import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Hero = () => {

  const [backgroundStyle, setbackgroundStyle] = useState({
      size: '80%', // Initialize with default desktop value
    position: 'left 250px top 100px'
  });

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width <= 300) { // Extra small devices
        setbackgroundStyle({
          size: '60%',
          position: 'left 10px top 200px'
        });
      }
      else if (width <= 768) { // Mobile
        setbackgroundStyle({
          size: '40%',
          position: 'right 10px top 100px'
        });
      } 
      else if (width > 1920) { // Extra wide screens
        setbackgroundStyle({
          size: '15%', 
          position: 'left 400px top 150px' 
        });
      }
      else { // Default desktop
        setbackgroundStyle({
          size: '80%',
          position: 'left 250px top 100px'
        });
      }
    };

    updateBackground();

     const debouncedResize = debounce(updateBackground, 100);
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  function debounce<T extends (...args: any[]) => void>(
      fn: T,
      delay: number
    ): (...args: Parameters<T>) => void {
      let timeoutId: ReturnType<typeof setTimeout>;
      
      return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    }
  
  return (
    <header role="banner" aria-label="Main hero section" className="relative">
      <Navbar />
      <section 
        id="hero"
        className="min-h-screen bg-no-repeat bg-cover"
        style={{
            backgroundImage: 'url(/banner_bg.jpeg)',
            backgroundSize: backgroundStyle.size,
            backgroundPosition: backgroundStyle.position,
            transition: 'background-size 0.3s ease, background-position 0.3s ease'
        }}
      >  
        {/* Hidden image for SEO/accessibility */}
        <img 
          src="/banner_bg.jpeg" 
          alt="Decorative background pattern" 
          className="hidden" 
          aria-hidden="true"
        />
        
        <div className="container grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-60px)]">
          <div className="hidden lg:block" aria-hidden="true"></div>
          <div className="text-[80px] sm:text-[130px] font-mono font-bold leading-tight flex justify-center lg:justify-center items-center text-white mb-14 px-16">
            <div>
              <h1 data-aos="fade-up" className="mb-0">I'm</h1>
              <h2 data-aos="fade-up" className="mb-0">Haseen</h2>
              <h2 data-aos="fade-up" className="mb-0">Afridi</h2>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;


// import React from 'react';
// import Navbar from './Navbar';
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <div>
//       <Navbar />

//       <section className="min-h-screen mt-12 flex flex-col sm:flex-row items-center sm:items-center justify-between px-6 sm:px-8 py-10 bg-black">

        
//         {/* Image Side */}
//         <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
//           <Image
//             src="/banner_bg.jpeg"
//             alt="Banner"
//             width={400}
//             height={400}
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md object-cover rounded-xl shadow-md"
//           />
//         </div>

//         {/* Text Side */}
//         <div className="w-full sm:w-1/2 flex justify-center sm:justify-start text-center sm:text-left mt-8 sm:mt-0">
//           <div className="max-w-[90%]">
//             <h1 className="text-white text-4xl md:text-6xl font-bold leading-snug space-y-2">
//               <p data-aos="fade-up">I m</p>
//               <p data-aos="fade-up">Haseen</p>
//               <p data-aos="fade-up">Afridi</p>
//             </h1>
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// };

// export default Hero;
