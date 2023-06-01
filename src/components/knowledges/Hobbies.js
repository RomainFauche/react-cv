import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fa-solid fa-bullseye"></i>
          <span>Tir à l'arc</span>
        </li>
        <li className="hobby">
          <i className="fa-solid fa-person-skating"></i>
          <span>Trotinette</span>
        </li>
        <li className="hobby">
          <i className="fa-solid fa-book"></i>
          <span>Littérature fantastique</span>
        </li>
        <li className="hobby">
          <i className="fa-solid fa-otter"></i>
          <span>Animaux domestiques/NAC</span>
        </li>
        <li className="hobby">
          <i className="fa-solid fa-paintbrush"></i>
          <span>Art</span>
        </li>
        <li className="hobby">
          <i className="fa-solid fa-camera-retro"></i>
          <span>Photographie</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
