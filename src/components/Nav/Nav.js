import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { MdOutlinePolymer } from 'react-icons/md';

import { Link } from 'react-scroll';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography as="li" className=" text-md font-normal text-white">
        <Link
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          to="home"
          className="flex items-center cursor-pointer hover:bg-secondary px-5 py-2 rounded-md transition-all duration-700"
        >
          Home
        </Link>
      </Typography>
      <Typography as="li" className=" text-md font-normal text-white">
        <Link
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          to="aboutME"
          className="flex items-center cursor-pointer hover:bg-secondary px-5 py-2 rounded-md transition-all duration-700"
        >
          About me
        </Link>
      </Typography>
      <Typography as="li" className=" text-md font-normal text-white">
        <Link
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          to="skills"
          className="flex items-center cursor-pointer hover:bg-secondary px-5 py-2 rounded-md transition-all duration-700"
        >
          Skills
        </Link>
      </Typography>
      <Typography as="li" className=" text-md font-normal text-white">
        <Link
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          to="projects"
          className="flex items-center cursor-pointer hover:bg-secondary px-5 py-2 rounded-md transition-all duration-700"
        >
          Portfolio
        </Link>
      </Typography>
      <Typography as="li" className=" text-md font-normal text-white">
        <Link
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          to="contact"
          className="flex items-center cursor-pointer hover:bg-secondary px-5 py-2 rounded-md transition-all duration-700"
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="max-w-full py-2 px-4 lg:px-8 lg:py-4 bg-primary border-none text-white fixed z-50">
      <div className="container mx-auto flex items-center cursor-pointer justify-between text-white">
        <Typography
          as="a"
          to="/"
          text-lg
          md
          className="mr-4 cursor-pointer py-1.5 font-semibold text-2xl"
        >
          <div className="flex items-center cursor-pointer">
            <MdOutlinePolymer className="text-secondary text-3xl mr-1" />
            <span> Tausif </span>
            <span className="text-secondary">Abid</span>
          </div>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <a
          href="https://drive.google.com/file/d/14cTlwWbRv8yva7gDqDoQ2qBmvMvziaxh/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            size="md"
            className="hidden lg:inline-block bg-secondary hover:shadow-lg hover:shadow-warning/30"
          >
            <span>Resume</span>
          </Button>
        </a>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
};

export default Nav;
