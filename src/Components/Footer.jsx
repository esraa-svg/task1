import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Location</h5>
          <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
        </div>
        <div className="col-md-4 mt-20">
          <h5>Around the Web</h5>
          <div>
            <a href="https://facebook.com" className="text-white mx-2">
              <i className=" fa-2x fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <i className=" fa-2x fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-white mx-2">
              <i className="fa-2x fab fa-linkedin"></i>
            </a>
            <a href="https://youtube.com" className="text-white mx-2">
              <i className="fa-2x fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <h5>About Freelancer</h5>
          <p>
            Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh
          </p>
        </div>
      </div>
    </div>
    <div className="text-center mt-4">
      <p>Copyright &copy; Hamza Nouh 2022</p>
    </div>
  </footer>
);
  
}
