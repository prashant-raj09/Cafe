import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} className="footer-logo" alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, sunt
            quo. Adipisci itaque provident voluptates maiores doloremque aliquam
            distinctio molestiae, maxime magnam cum debitis aliquid suscipit
            beatae repellendus, tempora fuga.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            {/* <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" /> */}
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-679807689</li>
            <li>jkkjh@jkq.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © KingCafe.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
