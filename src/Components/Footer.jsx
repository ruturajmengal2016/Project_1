import React from "react";
import Style from "./Styles/Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className={Style.root}>
      <div className={Style.first}>
        <div id={Style.one}>
          <span style={{ fontSize: "1.2rem", color: "red" }}>GYM</span>
          <span style={{ fontSize: "1.2rem" }}>
            Lorem ipsum dolor sit amet.
          </span>
          <span className={Style.media}>
            <a href="https://www.facebook.com" target="_blank"  rel="noreferrer">
              <BsFacebook size={25} fill="blue" />
            </a>

            <a href="https://www.instagram.com/" target="_blank"  rel="noreferrer">
              <GrInstagram size={25} fill="pink" />
            </a>

            <a href="https://www.twitter.com" target="_blank"  rel="noreferrer">
              <FiTwitter size={25} fill="blue" />
            </a>
          </span>
        </div>
        <div id={Style.two}>
          <h3>Healthy Living</h3>
          <li>olives</li>
          <li>oils, such as olive oil</li>
          <li>avocados</li>
          <li>Nuts</li>
        </div>
        <div id={Style.three}>
          <h3>Service</h3>
          <li>Compare</li>
          <li>Download</li>
          <li>Feedback</li>
          <li>Bug Reports</li>
        </div>
        <div id={Style.four}>
          <h3>Programs</h3>
          <li>Influencer</li>
          <li>Affiliate</li>
          <li>Co-branding</li>
          <li>Honor</li>
        </div>
      </div>
      <hr />
      <span>@2023 it's All rights copy reserved</span>
    </div>
  );
};

export default Footer;