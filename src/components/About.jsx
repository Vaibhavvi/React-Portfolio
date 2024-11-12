import React from 'react';
import './About.css'
import Frontend from '../assets/Frontend.jpeg'
import React1 from '../assets/React1.jpeg'
import Mern from '../assets/Mern.jpeg'
import Dube2 from '../assets/Dube2.png'

function About() {
  return (
    <>
      <div className="main-content">
        <h1>About me</h1>

        <div className='img-container'>
        <img src={Dube2} alt="vibhu" height='200' width='200' />
      </div>

        <p>Hello! I’m Vaibhav Dubey, a dedicated and certified full-stack developer with a strong focus on React.
          My journey in web development has been marked by a passion for crafting responsive, user-friendly web applications.With a solid foundation in both front-end and back-end technologies, I thrive in dynamic environments where I can leverage my skills to build robust, scalable solutions. My expertise in React allows me to create interactive, high-performance user interfaces, while my knowledge of Node.js, Express, and MongoDB ensures seamless integration and efficient server-side development.

          I am a lifelong learner, constantly seeking out new challenges and opportunities to expand my skill set. My certification as a developer is a testament to my commitment to excellence and my drive to stay at the forefront of technological advancements.

          Whether working independently or as part of a collaborative team, I bring a meticulous attention to detail and a proactive approach to problem-solving. Let's build something amazing together!</p>

        <div className="bottom-content">
          <img src={Frontend} alt="" />
          <img src={React1} alt="" />
          <img src={Mern} alt="" />
        </div>
      </div>

    </>
  );
}

export default About;
