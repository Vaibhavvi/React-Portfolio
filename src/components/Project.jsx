import React from 'react'
import { NavLink } from 'react-router-dom'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project5 from '../assets/Project5.png'

const Project = () => {
  return (
   <div className="main-container ">
    <h1>Latest Project</h1>

    <div className="card-container">
    <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={Project1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Word Change</h5>
        <p className="card-text">This project using Bootstrap and React . Using WordChange you change your text which way you want.</p>
        <NavLink to=''><button type="button" class="btn btn-outline-primary">See more</button></NavLink>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Project2} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">NewApp</h5>
        <p className="card-text">This project using Bootstrap and React . Using NewsApp you grab daily free news.</p>
        <NavLink to=''><button type="button" class="btn btn-outline-primary">See more</button></NavLink>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Project3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This project using HTML CSS and JavaScript. And my total html css and little bit js knowladge shared.</p>
        <NavLink to=''><button type="button" class="btn btn-outline-primary">See more</button></NavLink>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Project5} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <NavLink to=''><button type="button" class="btn btn-outline-primary">See more</button></NavLink>
      </div>
    </div>
  </div>
</div>
    </div>
   </div>
  )
}

export default Project
