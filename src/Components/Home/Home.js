import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import One from "../../assets/1.jpg";
import Two from "../../assets/2.jpg";
import Three from "../../assets/3.jpg";

import "./Home.scss";

function Home() {
  // const sectionRef = useRef(null);
  // const triggerRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const pin = gsap.fromTo(
  //     sectionRef.current,
  //     {
  //       translateX: 0,
  //     },
  //     {
  //       translateX: "-300vw",
  //       ease: "none",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top top",
  //         end: "2000 top",
  //         scrub: 0.6,
  //         pin: true,
  //       },
  //     }
  //   );

  //   return () => {
  //     pin.kill();
  //   };
  // }, []);

  return (
    <div className="container">
      <div className="horizontal-scroll-wrapper squares">
        <div>
          <img src={One} />
        </div>
        <div>
          <img src={Two} />
        </div>
        <div>
          <img src={Three} />
        </div>
        <div>
          <img src={Two} />
        </div>
        <div>
          <img src={One} />
        </div>
        <div>
          <img src={Three} />
        </div>
        <div>
          <img src={One} />
        </div>
        <div>
          <img src={One} />
        </div>
        <div>
          <img src={One} />
        </div>

        <div>
          <img src={One} />
        </div>
        <div>
          <img src={One} />
        </div>
        <div>
          <img src={One} />
        </div>
        <div>
          <img src={One} />
        </div>
      </div>
    </div>
  );
}

export default Home;
