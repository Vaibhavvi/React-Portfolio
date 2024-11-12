import React from 'react'

const Skill = () => {
  return (
    <>
      <div className="main-content">
        <h1>My Skill</h1>
      </div>
      <div className="skill-container" style={{padding:'20px'}}>
      <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped" style={{ width: "90%" }}></div>
      </div>
      <p>HTML5 90%</p>
      <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-info" style={{ width: "80%" }}></div>
      </div>
      <p>CSS 80%</p>
      <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-danger" style={{ width: "85%" }}></div>
      </div>
      <p>Bootstrap 85%</p>
      <div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-info" style={{ width: "75%" }}></div>
      </div>
      <p>JavaScript 75%</p>
      <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-warning" style={{ width: "80%" }}></div>
      </div>
      <p>React 80%</p>
      <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-info" style={{ width: "85%" }}></div>
      </div>
      <p>C++ 85%</p>
      <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-danger" style={{ width: "60%" }}></div>
      </div>
      <p>Python 60%</p>
      <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-primary" style={{ width: "70%" }}></div>
      </div>
      <p>MongoDB 70%</p>
      <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-warning" style={{ width: "65%" }}></div>
      </div>
      <p>Expess.js 65%</p>
      <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped bg-primary" style={{ width: "90%" }}></div>
      </div>
      <p>Node.js 60%</p>
      </div>
    </>
  )
}

export default Skill
