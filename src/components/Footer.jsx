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
              <li><a href="https://github.com/yourusername" className="text-white">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" className="text-white">LinkedIn</a></li>
              <li><a href="https://twitter.com/yourusername" className="text-white">Twitter</a></li>
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
