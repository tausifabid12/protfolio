import React from 'react';
import img from '../../assets/pexels-sharad-kachhi-3937174.jpg';
import img2 from '../../assets/pexels-aditya-singh-3103199.jpg';
import { FaLaptop } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const AboutMe = () => {
  return (
    <section
      className="w-full h-auto pb-16 lg:pb-36 px-4 lg:px-20 pt-16 lg:pt-0"
      id="aboutME"
    >
      <div className="space-y-2 mb-16">
        <h4 className="text-secondary text-sm lg:text-xl text-center">
          About Me
        </h4>
        <h2 className="text-white font-bold text-xl lg:text-4xl text-center ">
          A Passionate Developer Who Loves
        </h2>
        <h2 className="text-white font-bold text-xl lg:text-4xl text-center ">
          Developing New Ideas
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Tilt>
          <div className="w-full h-96  relative  lg:border-l-2 border-secondary">
            <div className="animate-pulse  bg-secondary rounded-lg grid place-content-center w-20 h-20 absolute left-20 top-16 shadow-lg shadow-warning/20">
              <FaLaptop className="text-white text-3xl" />
            </div>

            <div className="w-full lg:w-[60%] h-96 rounded-lg absolute lg:right-5 shadow-xl shadow-warning/20">
              <img src={img} className="w-full h-full rounded-lg" alt="" />
            </div>

            <div className="hidden lg:block w-[55%] h-80 rounded-lg absolute right-60 -bottom-36 shadow-xl shadow-warning/20">
              <img src={img2} className="w-full h-full rounded-lg" alt="" />
            </div>
          </div>
        </Tilt>
        <div className="w-full lg:px-8 space-y-6">
          <h1 className="text-3xl text-white text-center lg:text-left font-bold pt-10 lg:pt-0">
            About Me
          </h1>
          <p className="text-sm lg:text-md text-center lg:text-left text-gray-300">
            Hi, I'm Tausif Muftasin Abid From Bangladesh. I love to develop new
            ideas and create what travels on internet.I am proficient in
            developing user interfaces and professional web applications using
            React Js, Express Js and MongoDB. I am always willing to learn new
            traits.
          </p>
          <div className="hidden lg:grid w-full  grid-cols-1 lg:grid-cols-2  ">
            <div className="border border-gray-600 rounded-tl-xl rounded-bl-xl p-7">
              <ul className="list-none space-y-5">
                <li>
                  <p className="font-bold text-white">Name</p>

                  <p className="text-sm text-gray-500">
                    Md Tausif Muftasin Abid
                  </p>
                </li>
                <li>
                  <p className="font-bold text-white">Email</p>

                  <p className="text-sm text-gray-500">
                    tausifabid1@gmail.coms
                  </p>
                </li>
                <li>
                  <p className="font-bold text-white">Phone</p>

                  <p className="text-sm text-gray-500">+8801318048544</p>
                </li>
              </ul>
            </div>
            <div className="border border-gray-600 rounded-tr-xl rounded-br-xl p-7">
              <ul className="list-none space-y-5">
                <li>
                  <p className="font-bold text-white">Country</p>

                  <p className="text-sm text-gray-500">Bangladesh</p>
                </li>
                <li>
                  <p className="font-bold text-white">City</p>

                  <p className="text-sm text-gray-500">Gaibandha</p>
                </li>
                <li>
                  <p className="font-bold text-white">University</p>

                  <p className="text-sm text-gray-500">National University</p>
                </li>
              </ul>
            </div>
            <div className="col-span-2 grid place-content-center pt-7">
              <a
                href="https://drive.google.com/file/d/14cTlwWbRv8yva7gDqDoQ2qBmvMvziaxh/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                <button className="px-12 py-3 bg-secondary text-white  font-semibold rounded-lg shadow-lg shadow-warning/20">
                  My Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
