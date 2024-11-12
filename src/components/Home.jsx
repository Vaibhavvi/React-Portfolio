// Home.js
import React, { useState,useEffect } from 'react';
import './Home.css'
import Dube1 from '../assets/Dube1.jpg'
import { NavLink } from 'react-router-dom';

function Home() {

  const [text, setText] = useState('Frontend Developer');
  const texts = ['Frontend Developer', 'Full Stack Developer', 'React Developer','Lerner'];
  let index = 0;

  const [isVisible,setIsVisible] = useState(false);

  useEffect(() => {
  const interval = setInterval(() => {
  index = (index + 1) % texts.length;
  setText(texts[index]); }, 1000);
  return () => clearInterval(interval);},[]);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setIsVisible(true);
    },100);

    return()=>
      clearTimeout(timer);
  },[]);

    return (
      <>
      <div className="main-container">
      <div className='img-container'>
        <img src={Dube1} alt="vibhu" height='200' width='200' />
      </div>
      <div className={isVisible?'container':''}>
        <div className="text-container d-flex justify-content-center">
          <h4>  Hello 👋 <br />
          I'm Vaibhav Dubey <br /><span>{text}</span>
          </h4>
          <h6>Form Feroz gandhi Polytechnic Ratapur Raibareli</h6>
        </div>
        <div className='bottom-text'>
        <NavLink to="https://www.linkedin.com/in/vaibhav-dubey-8199292b4/"><button type="button" className="btn btn-outline-info text-dark">Hire me</button></NavLink> 
        </div>
      </div>
      </div>
      </>
    )
  }

export default Home;