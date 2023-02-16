import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 80 },
    { name: 'TAILWIND CSS', value: 80 },
    { name: 'JAVASCRIPT', value: 70 },
    { name: 'REACT.JS', value: 75 },
    { name: 'NEXT.JS', value: 68 },
    { name: 'EXPRESS.JS', value: 65 },
    { name: 'NODE.JS', value: 60 },
  ];

  return (
    <section className="px-4 lg:px-20" id="skills">
      <div className="space-y-2">
        <h2 className="text-secondary text-sm lg:text-xl text-center">
          Skills
        </h2>
        <h2 className="text-white font-bold text-xl lg:text-4xl text-center">
          I Work Hard to Improve My
        </h2>
        <h2 className="text-white font-bold text-xl lg:text-4xl text-center">
          Skills Regularly
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 mt-20">
        {skills.map((skill) => (
          <div className="grid place-content-center">
            <div
              className="radial-progress text-secondary  "
              style={{ '--value': skill.value }}
            >
              {skill.value}%
            </div>
            <h1 className="text-white font-semibold pt-4 text-center">
              {skill.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
