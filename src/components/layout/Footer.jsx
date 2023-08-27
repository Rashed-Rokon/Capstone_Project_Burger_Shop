import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => { 
  return (
    <footer> 
      <div>
        <h2>RASHED's Burger</h2>

        <p>We are trying to give you the best taste possible.</p> 
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All rights reserved @Rashed's Burger</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.youtube.com/@rashedrokon2494/videos"> <AiFillYoutube /></a>
        <a href="https://www.instagram.com/rok_on3644/"><AiFillInstagram /> </a>
        <a href="https://github.com/Rashed-Rokon"><AiFillGithub /> </a>
      </aside> 
    </footer>
  ); 
};

export default Footer;
