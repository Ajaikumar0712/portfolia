import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            I am a passionate and creative frontend developer with a love for building beautiful and functional web applications. I have a strong foundation in modern web technologies and a keen eye for detail.
          </p>
          <p className="mb-8">
            My goal is to create seamless user experiences and to continuously learn and adapt to new technologies. I am always excited to take on new challenges and to collaborate with others to bring ideas to life.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">HTML</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">CSS</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">JavaScript</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">React</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">Tailwind CSS</span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">Vite</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
