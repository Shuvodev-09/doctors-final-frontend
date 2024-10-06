import React from 'react';

import footbg from '..//..//..//assets/images/footer-bg 1 1.png';
const Footer = () => {
  return (
    <div style={{ backgroundImage: `url(${footbg})`, backgroundSize: 'cover' }}>
      <div className="container">
        <footer className="footer grid grid-cols-2 justify-between text-neutral-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover hover:text-secondary">
              Emergency Checkup
            </a>
            <a className="link link-hover hover:text-secondary">
              Monthly Checkup
            </a>
            <a className="link link-hover hover:text-secondary">
              Weekly Checkup
            </a>
            <a className="link link-hover hover:text-secondary">Deep Checkup</a>
          </nav>
          <nav>
            <h6 className="footer-title">ORAL HEALTH</h6>
            <a className="link link-hover hover:text-secondary">
              Fluoride Treatment
            </a>
            <a className="link link-hover hover:text-secondary">
              Cavity Filling
            </a>
            <a className="link link-hover hover:text-secondary">
              Teath Whitening
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">OUR ADDRESS</h6>
            <a className="link link-hover hover:text-secondary">
              New York - 101010 Hudson
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
