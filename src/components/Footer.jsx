import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>Email: vd3111542@gmail.com</li>
              <li>Phone: +6306751246</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Follow Me</h5>
            <ul className="list-unstyled">
              <li><a href="https://github.com/Vaibhavvi" className="text-white">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/vaibhav-dubey-8199292b4/" className="text-white">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/vaibhav_dubey_111/" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          &copy; {new Date().getFullYear()} Vaibhav Dubey ❤️. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
