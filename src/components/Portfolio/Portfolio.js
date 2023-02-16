import React from 'react';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.png';
import Tilt from 'react-parallax-tilt';

const Portfolio = () => {
  const data = [
    {
      img: project2,
      name: 'EXPRESS FOOD',
      info: 'A FOOD ORDERING SYSTEM',
      link: 'https://sh-furniture-83c92.web.app/',
    },
    {
      img: project4,
      name: 'Happy Shoppings',
      info: 'E-Commerce website',
      link: 'https://happy-shopping-01.vercel.app/',
    },
    {
      img: project1,
      name: 'SHF FURNITURE',
      info: 'A FURNITURE RESELLING WEBSITE',
      link: 'https://sh-furniture-83c92.web.app/',
    },
    {
      img: project3,
      name: 'TASK HANDLER',
      info: 'A TASK MANAGEMENT SYSTEM',
      link: 'https://task-mangement-client.vercel.app/',
    },
    {
      img: project5,
      name: 'Earthly',
      info: 'Product Selling Site',
      link: 'https://earthly-kappa.vercel.app/',
    },
    {
      img: project6,
      name: 'Awesome Food',
      info: 'A Food recipe review Website',
      link: 'https://awesome-food-23f92.web.app/',
    },
  ];
  return (
    <section className="h-full " id="projects">
      <div className="coverer px-4 lg:px-20 py-10 mx-auto ">
        <h1 className="text-secondary text-sm lg:text-xl text-center">
          Portfolio
        </h1>

        <p className="text-white font-bold text-xl lg:text-4xl text-center mb-8 lg:mb-24">
          These are some of my recent works
        </p>

        <div className=" grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:gap-12 px-2 lg:grid-cols-3  ">
          {data.map((info) => (
            <Tilt>
              <a
                href="https://sh-furniture-83c92.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                <div
                  className="relative z-20 bg-cover brightness-75 rounded-lg cursor-pointer h-96 group  bg-top   hover:bg-bottom shadow-lg shadow-warning/30"
                  style={{
                    backgroundImage: `url(${info.img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    transition: 'all linear 7s',
                  }}
                >
                  <div className="flex flex-col absolute bottom-5 right-12 justify-center w-3/4 mx-auto  px-8 py-3 transition-opacity duration-700 ease-in-out rounded-2xl opacity-0 backdrop-blur-sm bg-secondary group-hover:opacity-100 ">
                    <h2 className=" text-md font-bold text-white text-center capitalize">
                      {info.name}
                    </h2>
                    <p className="mt-2 text-xs tracking-wider font-bold text-white text-center uppercase ">
                      {info.info}
                    </p>
                  </div>
                </div>
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
