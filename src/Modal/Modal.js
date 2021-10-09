import React, { Component } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faYoutube,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })} className="whoCreatedButton">
          Who Created ?
        </button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Created by Musobek Madrimov</h1>
              <div className="socialLinks">
                <a
                  href="https://facebook.com/musobekmadrimov99"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook-icon"/>
                </a>
                <a
                  href="https://twitter.com/musobekmadrimov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter-icon"/>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCQ9FGGtND9zSapAr_AQVL_g"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" className="youtube-icon"/>
                </a>
                <a
                  href="https://instagram.com/musobekmadrimov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram-icon"/>
                </a>
                <a
                  href="https://github.com/musobekmadrimov"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon"/>
                </a>
              </div>
              <button
                onClick={() => this.setState({ isOpen: false })}
                className="modalCloseButton"
              >
                &times;
              </button>
              <div className="modal-footer">
              <a
                href="https://musobekmadrimov.uz"
                target="_blank"
                rel="noreferrer"
              >
                My offical website
              </a>
            </div>
            </div>
            
          </div>
        )}
      </React.Fragment>
    );
  }
}
