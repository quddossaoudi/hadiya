import React, { useEffect } from "react";
import "./Testimonials.css";
import { Box, Text, Image } from "@chakra-ui/react";
import Hadiya from "../../assets/Food/Food1.png";
import Quddos from "../../assets/Testimonials/quddossaoudi.jpeg";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

function Testimonials() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      autoHeight: true,
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <div>
      <div id="page" className="site">
        <div className="container">
          <div className="testi">
            <div className="head">
              <h3>Testimonials</h3>
              <p>What people are saying...</p>
            </div>
            <div className="body swiper">
              <ul className="swiper-wrapper">
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Hadiya} />
                    </div>
                    <div className="aside">
                      <p>
                        You turn everything to magic. Every work I give you
                        thinking this is a hopeless case and this is what you do
                        with it!
                      </p>
                      <div className="name">
                        <h4>Surkhab</h4>
                        <p>CEO & Co-Founder</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Hadiya} />
                    </div>
                    <div className="aside">
                      <p>
                        Your skills are amazing and you have a long way to go.
                        My favourite photographers are Hadiya and Izzah Shaheen
                      </p>
                      <div className="name">
                        <h4>Iqra Waseem</h4>
                        <p>Colleague</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="swiper-slide">
                  <div className="wrapper">
                    <div className="thumbnail">
                      <img src={Quddos} />
                    </div>
                    <div className="aside">
                      <p>
                        Working with Hadiya has been an absolute pleasure. She
                        is not only talented and experienced but also incredibly
                        humble and easy to work with. Her passion for
                        photography and videography truly shines through in her
                        work.
                      </p>
                      <div className="name">
                        <h4>Sohayb Saoudi</h4>
                        <p>Modal</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
