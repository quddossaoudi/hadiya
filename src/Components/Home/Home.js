import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import css from "./Home.module.css";

function Home() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className={css.scrollSectionOuter}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={css.scrollSectionInner}>
          <div className={css.scrollSection}>
            <h3>section 1</h3>
          </div>
          <div className={css.scrollSection}>
            <h3>section 2</h3>
          </div>
          <div className={css.scrollSection}>
            <h3>section 3</h3>
          </div>
          <div className={css.scrollSection}>
            <h3>section 4</h3>
          </div>
          <div className={css.scrollSection}>
            <h3>section 5</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
