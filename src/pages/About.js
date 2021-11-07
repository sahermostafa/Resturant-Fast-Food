import React from "react";
import {Card} from 'react-bootstrap';
import MultiplePizzas from "../assets/pizza.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop">
          <img src={MultiplePizzas} />
        </div>
      
      <div className="aboutBottom">
         <Card style={{width:`100%`}}>
                <Card.Body>
                    <Card.Title className='heade'>
                    ABOUT US
                    </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                    voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                    accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
                    molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
                    nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
                    error repudiandae fuga.
      
                    </Card.Text>
                </Card.Body>
            </Card>
      </div>
    </div>
  );
}

export default About;
