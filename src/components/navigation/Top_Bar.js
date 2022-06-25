import React from "react";
import { Nav } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

const TopBar = () => (
  <div className="top_bar">
    <>
      <Nav.Link href="#">
        <AiFillGithub />
        <span> Github</span>
      </Nav.Link>
      <Nav.Link href="#">
        <BsFacebook />
        <span>Facebook</span>
      </Nav.Link>
      <Nav.Link href="#">
        <AiFillInstagram />
        <span>Instagram</span>
      </Nav.Link>
      <Nav.Link href="#">
        <AiFillTwitterCircle />
        <span>Twitter</span>
      </Nav.Link>
      <Nav.Link href="#">
        <AiFillYoutube />
        <span>Youtube</span>
      </Nav.Link>
      <Nav.Link href="#">
        <AiOutlineWhatsApp />
        <span>WhatsApp</span>
      </Nav.Link>
    </>
  </div>
);

export default TopBar;
