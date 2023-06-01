import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt">
                <span>Aube</span>
              </i>
            </li>
            <li>
              <i className="fas fa-mobile-alt">
                <CopyToClipboard text="06 98 22 98 30">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Numero copié ! ");
                    }}
                  >
                    06 98 22 98 30
                  </span>
                </CopyToClipboard>
              </i>
            </li>
            <li>
              <i className="far fa-envelope">
                <CopyToClipboard text="romain.fauche.contact@gmail.com">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Mail copié ! ");
                    }}
                  >
                    romain.fauche.contact@gmail.com
                  </span>
                </CopyToClipboard>
              </i>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
           
              <a href="https://www.linkedin.com/in/romain-fauche/" target="_blank" rel="noopener noreferrer">
                <h4>linkedin</h4>
                <i className="fab fa-linkedin"></i>
              </a>
            
           
              <a href="https://github.com/RomainFauche" target="_blank" rel="noopener noreferrer">
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
            
           
              <a href="https://twitter.com/FaucheRomain" target="_blank" rel="noopener noreferrer">
                <h4>Twitter</h4>
                <i className="fab fa-twitter"></i>
              </a>
            
           
              <a href="https://codepen.io/romainfauche" target="_blank" rel="noopener noreferrer">
                <h4>CodePen</h4>
                <i className="fab fa-codepen"></i>
              </a>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
