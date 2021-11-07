import React,{useState} from "react";
import Logo from "../assets/logo.png";
import Logoo from "../assets/pizzaLogo1.png";
import "../styles/Navbar.css";
import PizzaLeft from "../assets/pexels-caleb-oquendo-3023479.jpg";
import{Navbar, Nav} from 'react-bootstrap';

function Navbars() {
  const [classed, setClassed] = useState(true);
  function toggle1(){
    setClassed(true)
  }
  function toggle2(){
    setClassed(false)
  }
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'  className="basic">
      
      <Navbar.Brand href='#'><img src={Logo} className="basic1" /></Navbar.Brand>
   
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav  className="me-auto">
                    <Nav.Link onClick={toggle1} href="#">Home</Nav.Link>
                    <Nav.Link onClick={toggle2} href="#">Contact</Nav.Link>
                   
                  </Nav>
                </Navbar.Collapse>
    </Navbar>
    <div className="contact" id={ classed ? "close" : "open"}>
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  </div>
    
    );
  }

export default Navbars;
