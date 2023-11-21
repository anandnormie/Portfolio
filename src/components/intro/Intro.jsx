import { useEffect, useRef } from "react";
import "./intro.scss";
import { ArrowDownward } from "@material-ui/icons";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      typeSpeed: 90,

      strings: ["| Competitive Programmer", "| Content Creator"]
    })
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgcontainer">
          <img src="assets/batman.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Anand Tiwari</h1>
          <h3>Developer <span ref={textRef}>
          </span>
          </h3>
        </div>
        <a href="#portfolio">
          <ArrowDownward className="arrowdown" />
        </a>
      </div>
    </div>
  )
}