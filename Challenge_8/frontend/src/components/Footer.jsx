import React from 'react';
import '../style/style.css'
import Logo from '../images/logo.png'
import FB from '../images/fb.png'
import IG from '../images/ig.png'
import Mail from '../images/mail.png'
import Twitter from '../images/twitter.png'
import Twitch from '../images/twitch.png'

const Footer = () => {
  return (
    <div class="container-fluid part-footer">
      <div class="row footer-container">
        <div class="col-4 footer-1">
          <p>Jalan Suroyo No. 161 Mayangan Kota <br />Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div class="col-2 footer-2">
          <a href="#our-services">Our Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#testimonial">Testimonial</a>
          <a href="#faq">FAQ</a>
        </div>
        <div class="col-3 footer-3">
          <p>Connect with us</p>
          <ul>
            <li><img src={FB} alt="" /></li>
            <li><img src={IG} alt="" /></li>
            <li><img src={Twitter} alt="" /></li>
            <li><img src={Mail} alt="" /></li>
            <li><img src={Twitch} alt="" /></li>
          </ul>
        </div>
        <div class="col-3 footer-4">
          <p>Copyright Binar 2022</p>
          <img src={Logo} />
        </div>
      </div>
    </div >
  );
}

export default Footer;
