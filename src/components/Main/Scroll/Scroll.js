import React, { useEffect } from "react";
import "./Scroll.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Scroll() {
  useEffect(() => {
    const up = document.querySelector(".scroll-buttn");

    window.addEventListener("scroll", () => {
      if (window.scrollY < 120) {
        up.style.display = "none";
      } else {
        up.style.display = "flex";
      }
    });

    up.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div className="scroll-buttn">
      <FontAwesomeIcon className="slider-icon" icon={faAngleUp} />
    </div>
  );
}
export default Scroll;
