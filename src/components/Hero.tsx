import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const [bgStyle, setBgStyle] = useState({
    backgroundSize: "contain",
    backgroundPosition: "left top",
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 300) {
        setBgStyle({ backgroundSize: "60%", backgroundPosition: "left 10px top 200px" });
      } else if (width <= 768) {
        setBgStyle({ backgroundSize: "40%", backgroundPosition: "right 10px top 100px" });
      } else if (width > 1920) {
        setBgStyle({ backgroundSize: "15%", backgroundPosition: "left 400px top 150px" });
      } else {
        setBgStyle({ backgroundSize: "contain", backgroundPosition: "left top" });
      }
    };

    handleResize();
    const debounced = debounce(handleResize, 100);
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, []);

  return (
    <header role="banner" className="relative">
      <Navbar />
      <section
        id="hero"
        className="min-h-screen bg-no-repeat bg-cover transition-all duration-300"
        style={{
          backgroundImage: "url(/banner_bg.jpeg)",
          ...bgStyle,
        }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-60px)] px-4">
          <div className="hidden lg:block" aria-hidden="true"></div>
          <div className="text-7xl sm:text-7xl lg:text-[130px] font-mono font-bold leading-tight flex justify-center items-center text-white mb-14 px-16">
            <div>
              <h1 data-aos="fade-up">I m</h1>
              <h2 data-aos="fade-up">Haseen</h2>
              <h2 data-aos="fade-up">Afridi</h2>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

// ✅ Utility function outside component (prevents redefining on every render)
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

export default Hero;
