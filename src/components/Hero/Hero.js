import React from 'react';
import myImg from '../../assets/myImg.png';
import pattern3 from '../../assets/pattern-3.svg';
import pattern4 from '../../assets/pattern-4.svg';
import bg from '../../assets/bg-090.jpg';
import { Link } from 'react-scroll';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      id="home"
      className="w-full lg:h-screen px-4 lg:px-20 grid grid-cols-1 md:grid-cols-2  place-content-center pt-24"
    >
      <div className="space-y-7 flex items-start flex-col justify-center ">
        <div>
          <h1 className="text-3xl lg:text-6xl text-white font-semibold pb-2">
            Tausif Muftasin <span className="text-secondary/100">Abid</span>
          </h1>
          <p className="text-sm lg:text-xl pl-2 text-white/90 font-semibold">
            Full Stack Developer
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-xs lg:text-lg font-light">
            I design and code beautiful simple things and I love it. I'm
            passionate about writing clean and efficient code, optimizing
            website performance, and ensuring a seamless user experience.
          </p>
          <div className="flex space-x-3 pt-3">
            <a
              href="https://www.facebook.com/tmabid.ab"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-2xl text-white" />
            </a>
            <a
              href="https://github.com/tausifabid12"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/tausif-muftasin-abid/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl text-white" />
            </a>
          </div>
        </div>
        <Link
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          to="contact"
          className="px-3 lg:px-8 py-1 lg:py-2 bg-secondary transition-all duration-300 ease-linear text-white text-sm lg:text-md  lg:font-semibold rounded-lg border-2 border-secondary hover:bg-transparent cursor-pointer"
        >
          Get Connected
        </Link>
      </div>
      <div className=" justify-center hidden lg:flex">
        <Tilt>
          <div className="bg-secondary rounded-full w-96 h-96 shadow-lg shadow-warning/20 relative">
            <img src={myImg} className="w-full h-full rounded-full" alt="" />
            <div className="animate-pulse absolute top-0 right-0 -z-30">
              <img src={pattern4} className="w-16 h-16 " alt="pattern3" />
            </div>
            <div className=" animate-[bounce_2s_ease-in-out_infinite] opacity-40 absolute bottom-0">
              <img src={pattern3} alt="pattern3" />
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Hero;
