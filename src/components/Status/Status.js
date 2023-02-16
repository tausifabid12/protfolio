import React from 'react';
import Tilt from 'react-parallax-tilt';

const Status = () => {
  return (
    <section
      className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 lg:px-20 py-12 lg:py-44"
      id="status"
    >
      <Tilt>
        <div className="px-8 py-12 h-36 rounded-xl bg-transparent backdrop-blur-xl backdrop-brightness-200 shadow-lg shadow-warning/20 border-l-4 border-secondary">
          <div className="flex items-center justify-center">
            <h3 className="text-5xl font-bold text-secondary pr-4">50+</h3>
            <h3 className="text-lg text-white">Projects</h3>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className="px-8 py-12 h-36 rounded-xl bg-transparent backdrop-blur-xl backdrop-brightness-200 shadow-lg shadow-warning/20 border-l-4 border-secondary">
          <div className="flex items-center justify-center">
            <h3 className="text-5xl font-bold text-secondary pr-4">1000+</h3>
            <h3 className="text-lg text-white">Errors</h3>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className="px-8 py-12 h-36 rounded-xl bg-transparent backdrop-blur-xl backdrop-brightness-200 shadow-lg shadow-warning/20 border-l-4 border-secondary">
          <div className="flex items-center justify-center">
            <h3 className="text-5xl font-bold text-secondary pr-4">250+</h3>
            <h3 className="text-lg text-white">Cups of coffee</h3>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className="px-8 py-12 h-36 rounded-xl bg-transparent backdrop-blur-xl backdrop-brightness-200 shadow-lg shadow-warning/20 border-l-4 border-secondary">
          <div className="flex items-center justify-center">
            <h3 className="text-5xl font-bold text-secondary pr-4">40+</h3>
            <h3 className="text-lg text-white">Feedbacks</h3>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default Status;
