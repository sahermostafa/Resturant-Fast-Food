import React from "react";
import BannerImage from "../assets/pexels-rania-alhamed-2454533.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
          <button> ORDER NOW </button>
      </div>
    </div>
  );
}

export default Home;
