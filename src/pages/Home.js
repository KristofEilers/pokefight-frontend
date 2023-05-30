import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

import "../css/home.css";
// import img1 from "../img/pokemon.png";
// import img2 from "../img/glurak.png";
// import sound from "../img/Opening.mp3";

function play() {
  new Audio(sound).play();
}

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="pokemon"></div>

          <div className="red-section">
            <img className="pokemon" src={img1} alt="Pokemon png" />
            <div>
              <div>
                <img className="glurak" src={img2} alt="Glurak png" />
              </div>
            </div>

            <div className="button-container">
              <Link onClick={play} to="/allpokemon" className="button"></Link>
            </div>
          </div>
          <div className="white-section"></div>
        </div>
      </div>
    </>
  );
}
